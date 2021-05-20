import React from 'react';
import VideoItem from './videoItem';

//props can be written as {videos} here

const VideoList = ({videos , onVideoSelect})=>{

    const renderedList=videos.map((videos) => {
        return (
            <VideoItem onVideoSelect={onVideoSelect} videoitem={videos} />  
        );
    });


    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
