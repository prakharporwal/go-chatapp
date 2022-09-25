import React, { Component } from 'react';
import Header from './components/Header';
import ChatHistory from './components/ChatHistory';
import { connect, sendMsg } from './api';

import './App.css';
import ChatInput from './components/ChatInput';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("new message")

      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]
      }));
    })
  }

  render() {
    const send = (event) => {
      if (event.keyCode !== 13) {
        return
      }

      const msg = {
        messageType: 1,
        body: event.target.value,
        timeStamp: Date.now()
      };
      console.log(msg)

      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]
      }));

      sendMsg(msg)

    }

    return (
      <div className="App" >
        <Header></Header>
        <ChatHistory chatHistory={this.state.chatHistory}></ChatHistory>
        <ChatInput send={send}></ChatInput>

      </div >
    );
  }
}

export default App;
