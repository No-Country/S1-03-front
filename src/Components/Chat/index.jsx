import React from 'react'
import styled from 'styled-components'

import ChatMessage from './ChatMessage'
import { messages } from '../../Utils/chatData'
import ChatInput from './ChatInput'
import TopBar from './TopBar'

const ChatContainer = styled.div`
  height: 100%;
  margin: auto;
  background-color: #ddf;
  padding: 1rem;
`

const Chat = () => {
  const user = 2

  return (
    <>
      <TopBar />
      <ChatContainer>
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            sender={user === msg.sender}
            content={msg.content}
            date={msg.date}
          />
        ))}
      </ChatContainer>
      <ChatInput />
    </>
  )
}

export default Chat
