import React, { useRef } from 'react';
import "./Register.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email    = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // パスワードと確認用
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワードが異なります");

    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value
        };
        // registerAPIを叩く
        await axios.post("/auth/register", user);
        navigate("/login");

      } catch(err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
        </div>
        
        <div className="loginRight">
          <form className="loginbox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">新規登録</p>
            <input 
              type="text"
              className="registerInput"
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="snsuser@sns.com"
              required
              ref={email}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="確認用パスワード"
              required
              minLength="6"
              ref={passwordConfirmation}
            />
            <button
              className="loginButton"
              type="submit"
            >
              サインアップ
            </button>
            <Link
              to="/login"
              className='loginLink'>
                <p className="loginText">ログインはこちら</p>
            </Link>
          </form>
         
        </div>
      </div>
    </div>
  );
}
