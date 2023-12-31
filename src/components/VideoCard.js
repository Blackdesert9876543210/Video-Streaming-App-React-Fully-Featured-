 import React from "react";

const VideoCard = ({ info }) => {
    console.log(info?.snippet?.channelTitle);
     const   snippet  = info?.snippet;
    const { channelTitle, title, thumbnails,publishedAt
    } = snippet;
    return (
        <div className="p-2 m-2 w-64 shadow-lg">
            <img className="rounded-lg p-1" alt="thumbnail" src= {thumbnails.medium.url} />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{publishedAt}</li>

                
            </ul>
        </div>
   )

};

//higher order function 
 export const AdVideoCard = ({info}) => {
    return (
        <div className="p-1 m-1 border border-red-900">
            <VideoCard info={info}/>
        </div>
    )
 }

export default VideoCard;