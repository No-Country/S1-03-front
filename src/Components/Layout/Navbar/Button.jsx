import styled, { css } from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${(props) => props.theme.white};
  background-color: transparent;
  border-radius: 1rem 0 0 1rem;
  border: none;
  ${(props) =>
    props.active &&
    css`
      background-color: ${props.theme.sidebarBg};
      color: ${props.theme.text}
    `}
`

export default Button
