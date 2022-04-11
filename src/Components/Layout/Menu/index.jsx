import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../../config/theme'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import BurgerButton from './BurgerButton'

const MenuContainer = styled.div`
  display: flex;
  width: 550px;
  @media screen and (max-width: ${breakpoints.tablet}px) {
    max-width: 90vw;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 100%;
    transition: transform 0.2s;
    ${(props) =>
      props.active &&
      css`
        transform: translateX(100%);
      `}
  }
`

const Menu = () => {
  const [active, setActive] = useState(false)

  return (
    <MenuContainer active={active}>
      <BurgerButton active={active} click={setActive} />
      <Navbar status={{ active, setActive }} />
      <Sidebar />
    </MenuContainer>
  )
}

export default Menu
