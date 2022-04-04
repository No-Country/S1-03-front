import React from 'react'
import Container from '../Components/Container'
import ModalContainer from '../Components/ModalContainer'
import { default as ErrorSvg } from '../assets/svg/undraw_personal_opinions_re_qw29.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { palette } from '../config/theme'
const NotFound = () => {
  return (
    <Container fullHeight fluid flex centered>
      <ErrorContainer>
        <Title> ERROR 404 </Title>
        <Logo src={ErrorSvg}/>
        <p>The page you are looking is not available</p>
        <Link to="/">Back to Home</Link>
      </ErrorContainer>
    </Container>
  )
}

const ErrorContainer = styled(ModalContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & > a {
    text-decoration: none;
    color: ${palette.green};
    transition: .3s all;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const Title = styled.h1`
  margin-bottom: 10px ;
  color: ${palette.red}
`

const Logo = styled.img`
  width: 50%;
  text-align: center;
`
export default NotFound
