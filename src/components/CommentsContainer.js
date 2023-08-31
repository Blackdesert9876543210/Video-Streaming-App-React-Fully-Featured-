
import React from "react";

const commentsData = [
    {
        name: "Ashim Barman",
        text: "Ashim is The Best",
        replies: [
           
        ],
    },
    {
        name: "King Khan",
        text: "king is always king",
        replies:[
            {
                name: "saluu bhai",
                text: "swagat nehi karoge hamara",
                replies:[]
            },
            {
                name: "sunny Deoal",
                text: "ooy tod dunga fod dunga sabko mar dunga",
                replies: [
                    {
                        name: "paresh Rawal",
                        text: "Tod re sale ki khopdi tod",
                        reply:[]
                    }
                ]
            }
        ]
    },
    {
        name: "Ashim Barman",
        text: "Ashim is The Best",
        replies: [],
    },
    {
        name: "King Khan",
        text: "king is always king",
        replies:[
            {
                name: "saluu bhai",
                text: "swagat nehi karoge hamara",
                replies:[]
            }
        ]
    }
];

const Comment = ({data}) => {
    const { name , text, replies } = data;
   return( <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-2">
      <img className="w-8 h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu3Is6EWkzisekqHQhRNavQBc3ReX_g4ITUdbpFakTw&s" />

      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
   </div>)
}

const CommentsList = ({ comments }) => {
   
   return comments.map((comment, index) =>(
   <div key={index}>
    <Comment  data={comment}/>
     
     <div className="pl-5 border-l-black ml-5">
        
        {/* <CommentsList comments={comment?.replies} /> */}
       
     </div>
   </div>
    
   ));     
    
}

const CommentsContainer = () => {
    return (
        <div className="m-5 p-2">
            <h1 className="font-bold text-2xl"> Comments</h1>
            <CommentsList comments = {commentsData} />
            </div>
    )
};


export default CommentsContainer;