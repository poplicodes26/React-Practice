import react from 'react';
import './videoItem.css';

const VideoItem =({videoitem , onVideoSelect})=>{

    return(
        <div onClick={()=>onVideoSelect(videoitem)} className="video-item item">
            <img className="ui image" src={videoitem.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {videoitem.snippet.title} 
                </div>
            </div>
        </div>
    );
}

export default VideoItem;