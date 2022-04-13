import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

import UserImg from '../../../UserImg'
import Container from '../../../Container'
import { breakpoints } from '../../../../config/theme'

const MessagePreview = styled.span`
  color: ${(props) => props.theme.inputPlaceholder};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 130px;
  @media (min-width: ${breakpoints.tablet}px) {
    width: 200px;
  }
`

const User = ({ img, firstname, lastname, message, email }) => {
  return (
    <Container fluid flex gap=".5rem">
      <UserImg rounded src={img} />
      <Container flex direction="column">
        <span>
          {firstname} {lastname}
        </span>
        <MessagePreview>{email || message}</MessagePreview>
      </Container>
    </Container>
  )
}

User.propTypes = {
  img: propTypes.string,
  firstname: propTypes.string,
  lastname: propTypes.string,
  message: propTypes.string,
  email: propTypes.string
}
export default User
