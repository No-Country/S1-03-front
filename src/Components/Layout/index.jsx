import React from 'react'
import propTypes from 'prop-types'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Container from '../Container'

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid flex>
        <Navbar />
        <Sidebar />
        <Container
          fluid
          flex
          direction="column"
          ai="space-between"
          w="70%"
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
