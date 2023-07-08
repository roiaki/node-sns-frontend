import React, { useContext, useRef } from 'react';
import "./Login.css";
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const email    = useRef();
  const password = useRef();
  const { user, dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で!</span>
          
        </div>
        <div className="loginRight">
          <form className="loginbox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログイン</p>
      
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
            <div className="passForgot">パスワードを忘れた方はこちら</div>
            <Link
              to="/register"
              className='loginLink'>
                <p className="loginText">サインアップはこちら</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
