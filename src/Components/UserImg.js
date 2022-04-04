import styled, { css } from 'styled-components'

const UserImg = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  ${props => props.rounded && css`border-radius: 100%;`}
`

export default UserImg
