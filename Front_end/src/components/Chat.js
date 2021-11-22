import React, { Component } from "react";
import "./Chat.css";

import socketio from "socket.io-client";
const socket = socketio.connect("http://localhost:3001")

class Chat extends Component {
    state = {
        message: "",
        contents: []
    };

    // sendMsg() 이벤트 발생, 메세지 발송
    sendMsg(){
        socket.emit('sendMsg', this.message)
    };
    // sendMsg 이벤트 처리
    componentWillUnmount(){
        socket.on('sendMsg', (result) => {
            this.contents.push(result)
        })
    }
    render() {
        return(
            <div className="Chatbox">
                <div className="title">
                    <h3>Netcha Chat</h3>
                </div>
                <div className="contents-box">

                </div>
                <div className="message-box">
                    <input 
                    type="text" 
                    className="input-msg" 
                    placeholder="채팅을 시작하세요."
                    value={this.props.value}
                    sendMsg={(e) => this.props.sendMsg(e.target.value)}
                    />
                    <button className="input-button" type="button" onClick>✔️</button> 
                </div>
            </div>
        )
    }
}

export default Chat;