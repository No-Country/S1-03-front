import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import Container from '../Container'
import UserImg from '../UserImg'

const TopBar = () => {
  const { primary } = useTheme()
  const friends = useSelector((state) => state.friends)
  const current = useSelector((state) => state.chat.current)
  const user = friends?.filter((e) => e.username === current)[0]

  return (
    <Container fluid bgc={primary}>
      <Container flex h="70px" centerCross gap="1rem" md_p="0 0 0 3rem">
        <UserImg src={user.img} rounded /> {user.firstname} {user.lastname}
      </Container>
    </Container>
  )
}

export default TopBar
