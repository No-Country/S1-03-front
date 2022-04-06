import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import propTypes from 'prop-types'

const ChatForm = styled.form`
  display: flex;
  height: 4rem;
  background-color: ${(props) => props.theme.white};
  padding: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  margin: 1rem;
`
const ChatButton = styled.button`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.inputPlaceholder};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.text};
  }
`
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

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const a = {
      id: `id-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      sender: 2,
      content: inputValue
    }

    const newList = [...list, a]
    func(newList)
    setInputValue('')
  }

  const onChange = (evt) => {
    setInputValue(evt.target.value)
  }
  return (
    <ChatForm onSubmit={handleSubmit}>
      <ChatButton type="button">
        <Icon icon="mdi:emoticon-happy-outline" />
      </ChatButton>
      <ChatButton type="button">
        <Icon icon="mdi:image-outline" />
      </ChatButton>
      <ChatButton type="button">
        <Icon icon="mdi:paperclip" />
      </ChatButton>
      <Input
        placeholder="Type a message"
        value={inputValue}
        onChange={onChange}
      />
      <ChatButton type="submit" disabled={!inputValue}>
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
