import React, { useState } from 'react'
import Container from '../Components/Container'
import Register from '../Components/Forms/Register'
import { default as LogoSvg } from '../assets/svg/Logo.svg'
import styled from 'styled-components'
import { palette } from '../config/theme'
import Login from '../Components/Forms/Login'
const Auth = () => {
  const [login, setLogin] = useState(false)
  return (
    <Container h="100vh" flex fluid centered>
        {login
          ? <AuthContainer>
            <FormContainer>
              <Title>Sign Up</Title>
              <Register></Register>
              <p>Have an account already? <Link onClick={() => setLogin(false)}>Sign In </Link></p>
            </FormContainer>
            <LogoContainer>
              <img src={LogoSvg}/>
              <h2> Messenger 2022</h2>
            </LogoContainer>
          </AuthContainer>
          : <AuthContainer>
              <LogoContainer>
                <img src={LogoSvg}/>
                <h2> Messenger 2022</h2>
              </LogoContainer>
              <FormContainer>
                <Title>Sign In</Title>
                <Login></Login>
                <p>You dont have an account? <Link onClick={() => setLogin(true)}>Sign Up </Link></p>
              </FormContainer>
          </AuthContainer>
        }
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
  color: ${palette.white}
`

const Link = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: ${palette.blue};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export default Auth
