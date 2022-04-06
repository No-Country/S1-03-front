import React, { useState } from 'react'

import { messages } from '../../Utils/chatData'
import ChatInput from './ChatInput'
import ChatContainer from './ChatContainer'
import TopBar from './TopBar'

const Chat = () => {
  const user = 2
  const [msgList, setMsgList] = useState(messages)

  return (
    <>
      <TopBar />
      <ChatContainer msg={msgList} user={user} />
      <ChatInput func={setMsgList} list={msgList} />
    </>
  )
}

export default Chat
