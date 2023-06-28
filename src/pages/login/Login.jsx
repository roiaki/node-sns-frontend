import React, { useRef } from 'react';
import "./Login.css";

export default function Login() {
  const email    = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
          
        </div>
        <div className="loginRight">
          <form className="loginbox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
      
            <input 
              type="email"
              className="loginInput"
              placeholder="snsuser@sns.com"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              ref={password}
            />
            <button className="loginButton">ログイン</button>
            <div className="loginForgot">パスワードを忘れた方はこちら</div>
            <button className="loginRegisterButton">サインアップ</button>
          </form>
        </div>
      </div>
    </div>
  );
}
