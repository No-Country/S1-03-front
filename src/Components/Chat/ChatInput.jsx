import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import propTypes from 'prop-types'
import Emoji from './Emoji'
import ChatButton from './Input/Button'
import ChatForm from './Input/Form'
import { useSelector } from 'react-redux'
import store from '../../redux/store'
import { addCharacterToInput } from '../../redux/chat/actions'
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
  const [inputValue, setInputValue] = useState('')
  const value = useSelector((state) => state.chat.input)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const a = {
      id: `id-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      sender: 2,
      content: value
    }
    const newList = [...list, a]
    func(newList)
    store.dispatch(addCharacterToInput(''))
  }

  const onChange = (evt) => {
    store.dispatch(addCharacterToInput(evt.target.value))
  }
  return (
    <ChatForm onSubmit={handleSubmit}>
      <Emoji addEmoji={setInputValue} currentValue={value}></Emoji>
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
