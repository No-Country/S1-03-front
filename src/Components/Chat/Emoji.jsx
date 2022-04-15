import { React, useState } from 'react'
import ChatButton from './Input/Button'
import { Icon } from '@iconify/react'
import styled from 'styled-components'
import { emojis } from '../../Utils/emojis.json'
import store from '../../redux/store'
import { addCharacterToInput } from '../../redux/chat/actions'
// import { theme } from '../../config/theme'

const Emoji = ({ addEmoji, currentValue }) => {
  const [open, setOpen] = useState(false)

  const handleClick = (emoji) => {
    store.dispatch(addCharacterToInput(`${currentValue}${emoji}`))
  }
  const click = () => {
    ;() => {
      addEmoji((prevState) => `${prevState}${emoji.emoji}`)
    }
  }
  return (
    <>
      <ChatButton type="button" onClick={() => setOpen(!open)}>
        <Icon icon={open ? 'akar-icons:cross' : 'mdi:emoticon-happy-outline'} />
      </ChatButton>
      {open ? (
        <EmojiContainer>
          {emojis.map((emoji) => (
            <EmojiButton
              key={emoji.unicode}
              onClick={() => handleClick(emoji.emoji)}>
              {emoji.emoji}
            </EmojiButton>
          ))}
        </EmojiContainer>
      ) : (
        <></>
      )}
    </>
  )
}

const EmojiContainer = styled.div`
  position: absolute;
  bottom: 70px;
  height: 40%;
  padding: 10px;
  background-color: ${(props) => props.theme.modalBg};
  width: 30vw;
  z-index: 100;
  overflow-y: scroll;
`

const EmojiButton = styled.span`
  cursor: pointer;
  margin: 5px;
`
export default Emoji
