import React from 'react'
import './VideoFooter.css';
import {Button, Avatar} from "@material-ui/core";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FavoriteIcon from '@mui/icons-material/Favorite';

function VideoFooter({channel, likes, shares, song, avatarSrc} ) {
  return (
    <div className="videoFooter">

        <div className="videoFooter_text">
          {/* to add avatar of a user */}
        <Avatar src={avatarSrc}/>

        {/* to add Follow button */}
        <h3>
            {channel} . <Button>Follow</Button>
        </h3>
        </div>
        
        {/* to add ticker/music-icon */}
           <div className="videoFooter_ticker">
          <MusicNoteIcon
          className="videoFooter_icon"/>
          <Ticker mode="smooth">
            {({index}) => (
              <>
              <h1>{song}</h1>
              </>
            )}
          </Ticker> 
          </div>

          <div className="videoFooter_actions">
             <div className="videoFooter_actionsLeft">
                     <FavoriteIcon fontSize="medium"/>
                     <ModeCommentIcon fontSize="medium"/>
                     <SendIcon fontSize="medium"/>
                     <MoreHorizIcon fontSize="medium"/>
             </div>

             <div className="videoFooter_actionsRight">
              <div className="videoFooter_stat">
                <FavoriteIcon/>
                <p>{likes}</p>
              </div>
              <div className="videoFooter_stat">
                <ModeCommentIcon/>
                <p>{shares}</p>
              </div>
              </div>
          </div>
            
      
    </div>
  )
}

export default VideoFooter
