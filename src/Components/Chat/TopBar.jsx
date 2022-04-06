import React from 'react'
import { useTheme } from 'styled-components'
import Container from '../Container'
import UserImg from '../UserImg'

const TopBar = () => {
  const { primary } = useTheme()
  const img =
    'https://64.media.tumblr.com/f5ec39d6fa69304a28f5755279ea4c76/178d467c126f1716-72/s500x750/68130d0b13e9837264c583c3eedc04ac10c6fb0d.jpg'
  return (
    <Container fluid bgc={primary}>
      <Container flex h="70px" centerCross gap="1rem">
        <UserImg src={img} rounded /> Firstname Lastname
      </Container>
    </Container>
  )
}

export default TopBar
