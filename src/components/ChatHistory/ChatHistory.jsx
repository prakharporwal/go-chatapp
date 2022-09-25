import React, { Component } from "react";
import Message from "../Message/Message";

import './ChatHistory.css'

class ChatHistory extends Component {

    render() {
        let messages = this.props.chatHistory.map(msg => <Message key={msg.timeStamp} message={JSON.stringify(msg)} />);

        return (
            <div>
                <h4>Chat History</h4>
                {messages}
            </div>
        )
    }
}


export default ChatHistory;