import React, { useState } from 'react'

import { messages } from '../../Utils/chatData'
import ChatInput from './ChatInput'
import ChatContainer from './ChatContainer'
import TopBar from './TopBar'
import Socket from '../../Services/socketio'
import Auth from '../../Services/auth'

const Chat = () => {
  const user = 2
  const [msgList, setMsgList] = useState(messages)

  const onClick = () => {
    Socket.connectQueue()
  }
  const sendMessage = () => {
    Socket.sendMessage('yo', 'hello xdxdxd')
  }

  return (
    <>
      <TopBar />
      <ChatContainer msg={msgList} user={user} />
      <ChatInput func={setMsgList} list={msgList} />
      <div>
        <button onClick={onClick}>conect</button>
        <button onClick={Auth.login}>Login</button>
        <button onClick={sendMessage}>msg</button>
      </div>
    </>
  )
}

export default Chat
