import React from 'react'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../../config/theme'

const Button = styled.button`
  position: fixed;
  display: block;
  top: 0.5rem;
  left: 1.5rem;
  width: 2rem;
  height: 2rem;
  z-index: 1100;
  padding: 0;
  border: none;
  background-color: transparent;
  &::after,
  &::before {
    content: '';
    display: block;
    width: 2rem;
    height: 4px;
    background-color: #fff;
    position: absolute;
    transition: transform 0.2s;
  }
  &::before {
    top: 0.5rem;
  }
  &::after {
    bottom: 0.5rem;
  }
  ${(props) =>
    props.active &&
    css`
      &::after,
      &::before {
        top: 1rem;
      }
      &::before {
        transform: rotate(135deg);
      }
      &::after {
        transform: rotate(-135deg);
      }
    `}
  @media screen and (min-width: ${breakpoints.tablet}px) {
    display: none;
  }
`

const BurgerButton = ({ active, click }) => {
  return (
    <Button
      onClick={() => {
        click(!active)
      }}
      active={active}
    />
  )
}

export default BurgerButton
