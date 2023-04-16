import React from 'react';
import "./Topbar.css";
import {
  Chat,
  Notifications,
  Search,
} from "@mui/icons-material";

export default function topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
          <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"></Search>

          <input
            type="text"
            className="searchInput"
            placeholder="探し物は何ですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">2</span>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
      
    </div>

  )
}
