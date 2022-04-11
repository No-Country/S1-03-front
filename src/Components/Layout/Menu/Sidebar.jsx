import React from 'react'
import propTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'

import Container from '../../Container'

const Bar = styled.div`
  background-color: ${(props) => props.theme.sidebarBg};
  height: 100vh;
  width: auto;
  box-shadow: 2px 0px 9px 0px #00000040;
  padding: 1rem 0.5rem;
  position: relative;
  z-index: 890;
  border-radius: 0 1rem 1rem 0;
`

const Sidebar = ({ children }) => {
  const { primary } = useTheme()
  const bggGrad = `${primary};
  background: -moz-linear-gradient(180deg, ${primary} 56%, #09097900 65%);
  background: -webkit-linear-gradient(180deg, ${primary} 56%, #09097900 65%);
  background: linear-gradient(180deg, ${primary} 56%, #09097900 65%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${primary}",endColorstr="#09097900",GradientType=1)`

  return (
    <Container bgc={bggGrad}>
      <Bar>{children}</Bar>
    </Container>
  )
}

Sidebar.propTypes = {
  children: propTypes.node
}

export default Sidebar
