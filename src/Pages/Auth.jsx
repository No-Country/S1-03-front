import React, { useState } from 'react'
import Container from '../Components/Container'
import Register from '../Components/Forms/Register'
import { default as LogoSvg } from '../assets/svg/Logo.svg'
import styled from 'styled-components'
import { palette, breakpoints } from '../config/theme'
import Login from '../Components/Forms/Login'
import { useSpring, animated } from 'react-spring'
const Auth = () => {
  const [login, setLogin] = useState(false)
  const animation1 = useSpring({
    from: { x: '-100%' },
    to: { x: '0' },
    reset: true
  })

  const animation2 = useSpring({
    from: { x: '100%' },
    to: { x: '0' },
    reset: true
  })

  return (
    <Container h="100vh" flex fluid centered>
        {login
          ? <AuthContainer>
            <FormContainer style={animation2}>
              <Title>Sign Up</Title>
              <Register></Register>
              <p>Have an account already? <Link onClick={() => setLogin(false)}>Sign In </Link></p>
            </FormContainer>
            <LogoContainer style={animation1}>
              <img src={LogoSvg}/>
              <h2> Messenger 2022</h2>
            </LogoContainer>
          </AuthContainer >
          : <AuthContainer>
              <LogoContainer style={animation2}>
                <img src={LogoSvg}/>
                <h2> Messenger 2022</h2>
              </LogoContainer>
              <FormContainer style={animation1}>
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
  margin-bottom: 30px;
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
  @media screen and (max-width: ${breakpoints.tablet}px){
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    height: 100%;
  }
`

const FormContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 5%;
  & > p {
    margin-top: 30px;
  }
  @media screen and (max-width: ${breakpoints.tablet}px){
    height: 70% !important;
    width: 80% !important;
  }
  @media screen and (max-width: ${breakpoints.mobile}px){
    height: 80% !important;
    width: 100% !important;
    & > p {
      font-size: 0.9rem;
    }
  }
`

const LogoContainer = styled(animated.div)`
  background: ${palette.greenBlueGradient};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  color: ${palette.white};
  & > img {
    width: 50%;
  }
  @media screen and (max-width: ${breakpoints.tablet}px){
    width: 100% !important;
    height: 30% !important;
    & > h2 {
      display: none;
    }
    & > img {
      width: auto !important;
      height: 70%;
    }
  }
  @media screen and (max-width: ${breakpoints.mobile}px){
    height: 20% !important;
  }
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
