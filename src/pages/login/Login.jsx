import React from 'react';
import "./Login.css";

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
            <p className="loginMsg">ログインはこちら</p>
      
            <input type="text" className="loginInput" placeholder="snsuser@sns.com" />
            <input type="text" className="loginInput" placeholder="******" />
            <button class="loginButton">ログイン</button>
            <div className="loginForgot">パスワードを忘れた方はこちら</div>
            <button class="loginRegisterButton">サインアップ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
