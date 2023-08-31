import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        //API call
        // debouncing 
        const timer = setTimeout(() =>{ 
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            }
            else{
            getSearchSuggetions()}}, 300);

        return () => {
            clearTimeout(timer);
        };

    }, [searchQuery]);

    const getSearchSuggetions = async () => {
        console.log("API CALL-" + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        
        // update the cache
        dispatch(cacheResult({
            [searchQuery]: json[1],
        }));
    }

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-6 mt-1 cursor-pointer"
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAS1BMVEX///8AAAAODg63t7fc3NwGBgbj4+PT09PHx8eGhoYoKCjf398xMTHu7u4tLS2Ojo74+PgcHBxOTk7BwcF7e3uurq5ycnI2NjZqampGIVwLAAABDklEQVRoge3a2RaCIBhFYVCzwiHTpvd/0rSrFugl/2nY3wvspSgO4BwAAACATeUtFDmFW7lRblqfX9uspfcG5cU+TXe9UbvvkvbJKO39KU4Pd7P2fRCN9iIe8YNh+/BB7fpslj7X8cU2mrXH5B6zO+nxKTe8wY9p2rmjLu3clH/Mx2k9PaumMqepiqc0AAB+RV3llLwkvoUvodjlVITLRv6a/a1lcdWlV+O1Udr79LQ/zNqPON0Fs3aIP/7/9RtYedzK8VZe59L7WzmvSedz6XPslVc9vwEA+GqD7j+y8P+5cN3AJr0aV64TCdfHlOuC/7oWq/wGVq77K/c7SPd5KPe3SPf1OOV+JgAAAACzJwAxIgKWqH3dAAAAAElFTkSuQmCC" />
                <img className="h-8" alt="youtube logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugkbZx0d_LUptmzKs0rtxxbRtoUwFoIBBvg&usqp=CAU" />
            </div>
            <div className="col-span-10 p-x-10">
                <div>
                    <input className="w-1/2 p-2 border border-gray-400 rounded-l-full px-5 py-2 " type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)} 
            />
                    <button className="px-5 py-2 border border-gray-400  rounded-r-full bg-gray-100">🔍</button>
                </div>
                {showSuggestions && (
                    <div className="absolute bg-white p-2 w-[31rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestions.map(s => <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu3Is6EWkzisekqHQhRNavQBc3ReX_g4ITUdbpFakTw&s" />
            </div>
        </div>
    );
}

export default Head;