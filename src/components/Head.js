import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
    <div  className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            <img 
            onClick={()=> toggleMenuHandler()}
            className="h-6 mt-1 cursor-pointer"
             alt="menu" 
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAS1BMVEX///8AAAAODg63t7fc3NwGBgbj4+PT09PHx8eGhoYoKCjf398xMTHu7u4tLS2Ojo74+PgcHBxOTk7BwcF7e3uurq5ycnI2NjZqampGIVwLAAABDklEQVRoge3a2RaCIBhFYVCzwiHTpvd/0rSrFugl/2nY3wvspSgO4BwAAACATeUtFDmFW7lRblqfX9uspfcG5cU+TXe9UbvvkvbJKO39KU4Pd7P2fRCN9iIe8YNh+/BB7fpslj7X8cU2mrXH5B6zO+nxKTe8wY9p2rmjLu3clH/Mx2k9PaumMqepiqc0AAB+RV3llLwkvoUvodjlVITLRv6a/a1lcdWlV+O1Udr79LQ/zNqPON0Fs3aIP/7/9RtYedzK8VZe59L7WzmvSedz6XPslVc9vwEA+GqD7j+y8P+5cN3AJr0aV64TCdfHlOuC/7oWq/wGVq77K/c7SPd5KPe3SPf1OOV+JgAAAACzJwAxIgKWqH3dAAAAAElFTkSuQmCC"/>
            <img className="h-8" alt="youtube logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugkbZx0d_LUptmzKs0rtxxbRtoUwFoIBBvg&usqp=CAU"/>
        </div>
        <div className="col-span-10 p-x-10">
            <input className="w-1/2 p-2 border border-gray-400 rounded-l-full px-5 py-2 bg-gray-100" type="text"/>
            <button className="px-5 py-2 border border-gray-400  rounded-r-full">🔍</button>
        </div>
        <div className="col-span-1">
            <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgu3Is6EWkzisekqHQhRNavQBc3ReX_g4ITUdbpFakTw&s"/>
        </div>
    </div>
    );
}

export default Head;