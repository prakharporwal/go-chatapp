import React, { Component } from 'react';
import './ChatInput.css';

class ChatInput extends Component {

    render() {
        return (
            <div class="ChatInput">
                <input type="text" onKeyDown={this.props.send} placeholder="Type a Message ... Hit Enter to send!" />
            </div>
        )
    }
}

export default ChatInput;