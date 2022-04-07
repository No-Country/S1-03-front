import React from 'react'
import { useTheme } from 'styled-components'
import { Icon } from '@iconify/react'

import Container from '../../../Container'
import UserImg from '../../../UserImg'
import Button from './Button'

const Navbar = () => {
  const { primary } = useTheme()
  const img =
    'https://64.media.tumblr.com/f5ec39d6fa69304a28f5755279ea4c76/178d467c126f1716-72/s500x750/68130d0b13e9837264c583c3eedc04ac10c6fb0d.jpg'
  return (
    <Container
      w="7rem"
      h="100vh"
      bgc={primary}
      flex
      direction="column"
      ai="center"
      gap="2rem"
      p="1rem 0"
      pos="relative"
      z="900"
      >
      <UserImg src={img} rounded />
      <Button active>
        <Icon icon="bi:chat-right" />
      </Button>
      <Button>
        <Icon icon="bi:person" />
      </Button>
    </Container>
  )
}

export default Navbar
