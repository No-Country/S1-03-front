import { React, useState } from 'react'
import ChatButton from './Input/Button'
import { Icon } from '@iconify/react'
import styled from 'styled-components'
import { emojis } from '../../Utils/emojis.json'
// import { theme } from '../../config/theme'
const Emoji = () => {
  const [open, setOpen] = useState(false)
  handleClick = (e, data) => {
    // access to e.target here
    console.log(data)
  }
  return (
    <>
      <ChatButton type="button" onClick={() => setOpen(!open)}>
        <Icon icon={open ? 'akar-icons:cross' : 'mdi:emoticon-happy-outline'} />
      </ChatButton>
      { open
        ? <EmojiContainer>{ emojis.map(emoji => <EmojiButton key={emoji.order} onClick={((e) => this.handleClick(e, data))} >{emoji.emoji}</EmojiButton>) } </EmojiContainer>

        : <></>

      }

    </>
  )
}

const EmojiContainer = styled.div`
  position: absolute;
  bottom: 70px;
  height: 40%;
  padding: 10px;
  background-color:  ${(props) => props.theme.modalBg};
  width: 30vw;
  z-index: 100;
  overflow: scroll;
`

const EmojiButton = styled.span`
  cursor: pointer;
  margin: 5px;
`
export default Emoji
