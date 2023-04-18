import React from 'react'
import './VideoCard.css';
import {useRef, useState} from "react";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({channel, avatarSrc, url, likes, shares, song}) {

    // to add the functionality of playing video we gonna we use useState and useRef Hooks
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    // onclicking , reel plays
    const onVideoPress=() => {
       if(isVideoPlaying){
          //  id video is playing- stop it
          videoRef.current.pause();
          setIsVideoPlaying(false);
       }  else{
        // otherwise-play it
        videoRef.current.play();
        setIsVideoPlaying(true);
       }
    }

  return (
    <div className="videoCard">

      <VideoHeader/>

       <video 
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard_player" 
         src={url}
         alt='IG REEL Video'
         loop={true}
       />

       <VideoFooter
         channel={channel}
         likes={likes}
         shares={shares}
         avatarSrc={avatarSrc}
         song={song}
       />

    </div>
  )
}

export default VideoCard
