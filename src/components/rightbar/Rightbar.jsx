import React from 'react';
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="startImg" />
          <span className="eventText"><b>フォロワー限定イベント開催中！</b>
          </span>
        </div>
        
        <img src="assets/event.jpeg" alt="" className="eventImg"/>
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          { Users.map((user) =>  (
            <Online user={user} key={user.id}/>
          ))}
        
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion1.jpeg"
          alt=""
        />
        <p className="promotionName">ショッピング</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion2.jpeg"
          alt=""
        />
        <p className="promotionName">カーショップ</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion3.jpeg"
          alt=""
        />
        <p className="promotionName">ShinCode株式会社</p>

      </div>
    </div>
  )
}
