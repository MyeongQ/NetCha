import React from "react";
import logo from '../images/logo.png';
import LoginButton from "./loginButton";
import "../routes/Home.css" // 레이아웃 css 파일 만들기
import "./Layout.css"

class Layout extends React.Component {
  render() {
    return (
    <div className="Layout">
        <div className="Tool-bar">
            <a href="community">커뮤니티</a>
            <a href="netflix">넷플릭스 랭킹</a>
            <a href="watcha">왓챠 랭킹</a>
            <div className="My-menu">
                <a href="mypage">마이 페이지</a>
                <a href="about">FAQ</a>
                <LoginButton/>
        </div>
        </div>
        <div className="App-logo">
            <a href="/" target="_blank" left="40px">
              <img src={logo} className="App-logo" alt="logo"/>
            </a>
        </div>


    </div>
    );
  }
}

export default Layout;