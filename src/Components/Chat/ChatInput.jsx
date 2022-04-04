import React from 'react'
import styled from 'styled-components'
import {
  MdSend,
  MdAttachFile,
  MdOutlineSentimentSatisfied,
  MdOutlinePhoto
} from 'react-icons/md'
import { messages } from '../../Utils/chatData'

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
const Input = styled.textarea`
  width: 100%;
  max-width: 100%;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 1rem;
  height: 1.5rem;
  resize: none;
`

const ChatInput = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault()
    alert(JSON.stringify(messages, null, 2))
  }

  return (
    <ChatForm onSubmit={handleSubmit}>
      <ChatButton type="button">
        <MdOutlineSentimentSatisfied />
      </ChatButton>
      <ChatButton type="button">
        <MdOutlinePhoto />
      </ChatButton>
      <ChatButton type="button">
        <MdAttachFile />
      </ChatButton>
      <Input placeholder="Type a message"></Input>
      <ChatButton type="submit">
        <MdSend />
      </ChatButton>
    </ChatForm>
  )
}
export default ChatInput
