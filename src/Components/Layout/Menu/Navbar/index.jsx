import React from 'react'
import { useTheme } from 'styled-components'
import { Icon } from '@iconify/react'
import propTypes from 'prop-types'

import Container from '../../../Container'
import UserImg from '../../../UserImg'
import Button from './Button'

const Navbar = ({ sideBar }) => {
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
      md_p="4rem 0"
      pos="relative"
      z="900">
      <UserImg src={img} rounded />
      <Button active={sideBar.current === 'chat'}
      onClick={() => {
        sideBar.change('chat')
      }}>
        <Icon icon="bi:chat-right" />
      </Button>
      <Button
        active={sideBar.current === 'friends'}
        onClick={() => {
          sideBar.change('friends')
        }}>
        <Icon icon="bi:person" />
      </Button>
    </Container>
  )
}

Navbar.propTypes = {
  sideBar: propTypes.object
}

export default Navbar
