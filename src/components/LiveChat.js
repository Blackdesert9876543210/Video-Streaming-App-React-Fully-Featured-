import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { RandomSentenceGenerator, randomNameGenerate } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(()=> {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: randomNameGenerate(),
                message: RandomSentenceGenerator()
            }))
        }, 2000);
        return () => clearInterval(i);
    }, []);

    
    return (
        <>
    <div className="w-full h-[580px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    <div>
     {
       
       chatMessages.map((c,i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
       ))
    } 
    </div>
    
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
            addMessage({
                name: "Ashim🎈",
                message: liveMessage
            })
        )
        setLiveMessage("")
        }}>
       <input className="w-89 px-2" type="text" value={liveMessage} onChange={(e) => {
        setLiveMessage(e.target.value);
       }}/>
       <button className="px-2 mx-2 bg-green-50">Send</button>
    </form>
    </>
    
    )
};

export default LiveChat;