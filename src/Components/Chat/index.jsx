import React, { useState } from 'react'

import { messages } from '../../Utils/chatData'
import ChatInput from './ChatInput'
import ChatContainer from './ChatContainer'
import TopBar from './TopBar'
import Container from '../Container'

const Chat = () => {
  const user = 2
  const [msgList, setMsgList] = useState(messages)

  return (
    <Container
      fluid
      flex
      direction="column"
      ai="space-between"
      bgc={'#ddf'}
      w="70%"
      h="100vh"
      margin="0 0 0 auto">
      <TopBar />
      <ChatContainer msg={msgList} user={user} />
      <ChatInput func={setMsgList} list={msgList}/>
    </Container>
  )
}

export default Chat
