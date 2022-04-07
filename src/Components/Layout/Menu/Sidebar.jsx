import React from 'react'
import propTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'

import Container from '../../Container'

const Bar = styled.div`
  background-color: ${(props) => props.theme.sidebarBg};
  width: 22rem;
  height: 100vh;
  box-shadow: 6px 9px 13px 0px #00000040;
  position: relative;
  padding: 1rem 0.5rem;
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
    <Container fluid bgc={bggGrad} w="22rem">
      <Bar>{children}</Bar>
    </Container>
  )
}

Sidebar.propTypes = {
  children: propTypes.node
}

export default Sidebar
