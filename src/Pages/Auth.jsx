import React from 'react'
import Container from '../Components/Container'
import ModalContainer from '../Components/ModalContainer'
import Form from '../Components/Form'
const Auth = () => {
  return (
    <Container fullHeight flex centered>
      <ModalContainer>
        <Form></Form>
      </ModalContainer>
    </Container>
  )
}

export default Auth
