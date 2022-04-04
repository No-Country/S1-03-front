import React from 'react'
import Container from '../Components/Container'
import ModalContainer from '../Components/ModalContainer'
import { default as ErrorSvg } from '../assets/svg/undraw_personal_opinions_re_qw29.svg'
import styled from 'styled-components'
const NotFound = () => {
  return (
    <Container fullHeight fluid flex centered>
      <ErrorContainer>
        <Title> Error 404 </Title>
        <Logo src={ErrorSvg}/>
        <p> Aca va la descripcion de como te re perdiste man </p>
      </ErrorContainer>
    </Container>
  )
}

const ErrorContainer = styled(ModalContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Title = styled.h1`
  margin-bottom: 10px ;
  color: ${(props) => props.red}

`

const Logo = styled.img`
  width: 50%;
  text-align: center;
`
export default NotFound
