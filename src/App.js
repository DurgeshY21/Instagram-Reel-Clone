import React, {useState, useEffect} from 'react';
import './App.css';
import VideoCard from './VideoCard';
import video from "./assests/video1.mp4";
import db from './Firebase';

function App() {

  const [reels, setReels] = useState([]); 

  useEffect(()=>{
    // App components will run once when it loads, and never again
    db.collection('reels').onSnapshot(snapshot => (
        // snapshot.docs returns an array and .map() allows you to loop throught this
      setReels(snapshot.docs.map(doc => doc.data()))
      
    
    ))
  },[])

  return (
    // BEM naming convention
    <div className="app">
      <h1> Hey Durgesh, lets build an ig reel clone</h1>
      
      <div className="app_top">
      {/* INSTA REEL image or logo at top */}
      <img
      className="app_logo"
      src="https://ouch-cdn2.icons8.com/_US60I188UuoRurpJ9lfFmfp5baT-Gtp3bghSn-AOL8/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTI0/L2NjYjgwMjlkLWZh/NWMtNDU5Yy05YjBk/LWI0Yzg2MzI3Zjc0/Mi5wbmc.png" alt=""
      />

      {/* then we have text- Reels */}
      <h1>Reels</h1>
      </div>

      <div className="app_videos">
      {/* then we have -container with ig videos or reel-scrollable container */}
       {reels.map(({channel, avatarSrc, url, likes, shares, song}) => ( 
          <VideoCard
         channel="Mansi"
         avatarSrc="https://randomuser.me/api/portraits/women/75.jpg"
         song="Libianca- People"
         url={video}
         likes={950}
         shares={80}
        /> 
      
       ))}   
      </div>
    </div>
  );
}

export default App;
