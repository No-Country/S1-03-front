import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { breakpoints } from '../../config/theme'

const MessageBalloon = styled.div`
  position: relative;
  margin-bottom: 2rem;
  z-index: 10;
  ${(props) =>
    props.sender
      ? css`
          background-color: ${(props) => props.theme.primary};
          border-radius: 30px 30px 0 30px;
          padding: 1rem;
          max-width: 70%;
          margin-left: auto;
          &::after {
            content: '${(props) => props.date}';
            display: block;
            position: absolute;
            bottom: -1.3rem;
            font-size: 0.8rem;
            left: 1.5rem;
            color: ${props.theme.inputPlaceholder};
          }
        `
      : css`
          background-color: ${(props) => props.theme.secondary};
          border-radius: 30px 30px 30px 0;
          padding: 1rem;
          max-width: 70%;
          &::after {
            content: '${(props) => props.date}';
            display: block;
            position: absolute;
            bottom: -1.3rem;
            font-size: 0.8rem;
            right: 1.5rem;
            color: ${props.theme.inputPlaceholder};
          }
        `}
  @media screen and (max-width: ${breakpoints.tablet}px) {
    max-width: 85%;
  }
`
MessageBalloon.propTypes = {
  sender: propTypes.bool
}

export default MessageBalloon
