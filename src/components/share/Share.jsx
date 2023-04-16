import React from 'react';
import "./Share.css";
import { Analytics, Face, Gif, Image } from '@mui/icons-material';

export default function Share() {
  return (
    <div class="share">
      <div class="shareWrapper">
        <div class="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input 
            type="text"
            className="shareInput"
            placeholder="今なにしてる？"
          />
        </div>

        <hr className="shareHr" />

        <form class="shareButtons">
          <div className="shareOptions">
            <div className="shareOption">
              <Image className="shareIcon" htmlColor='blue' />
              <span className="shareOptionText">写真</span>
            </div>
            <div className="shareOption">
              <Gif className="shareIcon" htmlColor='hotpink' />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <Face className="shareIcon" htmlColor='green' />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <Analytics className="shareIcon" />
              <span className="shareOptionText">投票</span>
            </div>
            
          </div>
          <button className="shareButton">投稿</button>
        </form>
      </div>
    </div>
 
  );
}
