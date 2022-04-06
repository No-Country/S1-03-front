import React from 'react'
import propTypes from 'prop-types'

import Container from '../Container'
import ChatMessage from './ChatMessage'

const ChatContainer = ({ msg, user }) => {
  return (
    <Container
      fluid
      h="100%"
      mh="100%"
      overflow="auto"
      flex
      direction="column-reverse">
      <Container p="1rem">
        {msg?.map((m) => (
          <ChatMessage
            key={m.id}
            sender={user === m.sender}
            content={m.content}
            date={m.date}
          />
        ))}
      </Container>
    </Container>
  )
}

ChatContainer.propTypes = {
  msg: propTypes.array,
  user: propTypes.any
}
export default ChatContainer
