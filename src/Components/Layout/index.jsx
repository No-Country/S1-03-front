import React from 'react'
import propTypes from 'prop-types'
import Menu from './Menu'
import Container from '../Container'

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid flex>
        <Menu />
        <Container
          fluid
          flex
          direction="column"
          ai="space-between"
          md_w="100%"
          h="100vh"
          margin="0 0 0 auto">
          {children}
        </Container>
      </Container>
    </>
  )
}
Layout.propTypes = {
  children: propTypes.node
}

export default Layout
