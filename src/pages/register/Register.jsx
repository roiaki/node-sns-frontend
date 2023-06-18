import React from 'react';
import "./Register.css";

export default function login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
          <p>test</p>
        </div>
        <div className="loginRight">
          <div className="loginbox">
            <p className="loginMsg">新規登録はこちら</p>
            <input 
              type="text"
              className="loginInput"
              placeholder="ユーザー名"
            />
            <input
              type="text"
              className="loginInput"
              placeholder="snsuser@sns.com"
            />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード"
            />
            <input
              type="text"
              className="loginInput"
              placeholder="確認用パスワード"
            />
            <button class="loginButton">サインアップ</button>
            <button class="loginRegisterButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
}
