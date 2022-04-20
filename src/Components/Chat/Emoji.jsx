import { React, useState } from 'react'
import ChatButton from './Input/Button'
import { Icon } from '@iconify/react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring'

import { emojis } from '../../Utils/emojis.json'
import store from '../../redux/store'
import { addCharacterToInput } from '../../redux/chat/actions'

const Emoji = () => {
  const [open, setOpen] = useState(false)
  const value = useSelector((state) => state.chat.input)
  const animation = useSpring({ y: open ? '0' : '20%', opacity: open ? 1 : 0 })
  const handleClick = (emoji) => {
    store.dispatch(addCharacterToInput(`${value}${emoji}`))
  }

  return (
    <>
      <ChatButton type="button" onClick={() => setOpen(!open)}>
        <Icon icon={open ? 'akar-icons:cross' : 'mdi:emoticon-happy-outline'} />
      </ChatButton>
      {open
        ? <EmojiContainer style={animation}>
          {emojis.filter(emoji => emoji.category.startsWith('People & Body')).map(emoji => (
            <EmojiButton
              key={emoji.unicode}
              onClick={() => handleClick(emoji.emoji)}>
              {emoji.emoji}
            </EmojiButton>
          ))}
        </EmojiContainer>
        : <></>
      }
    </>
  )
}

const EmojiContainer = styled(animated.div)`
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
