import React from 'react'
import propTypes from 'prop-types'

import MessageBalloon from './ChatBalloon'

const ChatMessage = ({ content, date, sender }) => {
  return (
    <MessageBalloon sender={sender} date={date}>
      {content}
    </MessageBalloon>
  )
}

ChatMessage.propTypes = {
  content: propTypes.string,
  date: propTypes.string,
  sender: propTypes.bool
}

export default ChatMessage
