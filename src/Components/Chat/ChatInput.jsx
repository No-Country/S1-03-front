import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'

import store from '../../redux/store'
import { addCharacterToInput, sendMessage } from '../../redux/chat/actions'
import Emoji from './Emoji'
import ChatButton from './Input/Button'
import ChatForm from './Input/Form'

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  height: 1.5rem;
  resize: none;
`

const ChatInput = ({ func, list = [] }) => {
  const value = useSelector((state) => state.chat.input)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    store.dispatch(sendMessage(value))
    store.dispatch(addCharacterToInput(''))
  }

  const onChange = (evt) => {
    store.dispatch(addCharacterToInput(evt.target.value))
  }
  return (
    <ChatForm onSubmit={handleSubmit}>
      <Emoji></Emoji>
      <ChatButton type="button">
        <Icon icon="mdi:image-outline" />
      </ChatButton>
      <ChatButton type="button">
        <Icon icon="mdi:paperclip" />
      </ChatButton>
      <Input placeholder="Type a message" value={value} onChange={onChange} />
      <ChatButton type="submit" disabled={!value}>
        <Icon icon="mdi:send" />
      </ChatButton>
    </ChatForm>
  )
}

ChatInput.propTypes = {
  func: propTypes.func,
  list: propTypes.array
}

export default ChatInput
