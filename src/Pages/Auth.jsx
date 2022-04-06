import React from 'react'
import Container from '../Components/Container'
import Form from '../Components/Form'
import { default as LogoSvg } from '../assets/svg/Logo.svg'
import styled from 'styled-components'
import { palette } from '../config/theme'
import Login from '../Components/Auth/Login'

const Auth = () => {
  return (
    <Container h="100vh" flex fluid centered>
      <Login></Login>
      {/* <AuthContainer>
        <FormContainer>
          <Title>Sign Up</Title>
        </FormContainer>
        <LogoContainer>
          <img src={LogoSvg}/>
          <h2> Messenger 2022</h2>
        </LogoContainer>
      </AuthContainer> */}
    </Container>
  )
}

const Title = styled.h2`
  font-size: 2rem;
`

const AuthContainer = styled.main`
  margin: auto;
  background-color: ${(props) => props.theme.modalBg};
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > div {
    width: 50%;
  }
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 5%;
`

const LogoContainer = styled.div`
  background: ${palette.greenBlueGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${palette.white};
`
export default Auth
