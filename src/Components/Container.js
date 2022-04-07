import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { breakpoints } from '../config/theme'

// prettier-ignore
const Container = styled.div`
  ${props => props.bgc && css`background-color: ${props => props.bgc};`}
  ${props => props.overflow && css`overflow: ${props.overflow};`}
  /* Sizing */
  width: ${props => props.w || '100%'};
  ${props => props.h && css`height: ${props.h};`}
  max-width: ${props => (props.fluid ? '100%' : '90%')};
  ${props => props.mh && css`max-height: ${props.mh};`}
  ${props => props.mw && css`max-width: ${props.mw};`}
  margin: ${props => props.margin || '0 auto'};
  ${props => props.p && css`padding: ${props.p};`}
  /* Position options */
  ${props => props.pos && css`position: ${props => props.pos};`}
  ${props => props.pos && props.top && css`top: ${props.top};`}
  ${props => props.pos && props.bottom && css`bottom: ${props.bottom};`}
  ${props => props.pos && props.left && css`left: ${props.left};`}
  ${props => props.pos && props.right && css`right: ${props.right};`}
  ${props => props.pos && props.z && css`z-index: ${props.z};`}
  /* Flex options*/
  ${props => props.flex && css`display: flex;`}
  ${props => props.flex && props.jc && css`justify-content: ${props.jc};`}
  ${props => props.flex && props.ai && css`align-items: ${props.ai};`}
  ${props => props.flex && props.direction && css`flex-direction: ${props.direction};`}
  ${props => props.flex && props.centerMain && css`justify-content: center;`}
  ${props => props.flex && props.centerCross && css`align-items: center;`}
  ${props => props.flex && props.gap && css`gap: ${props.gap};`}
  ${props => props.flex && props.centered && css`
    align-items: center;
    justify-content: center;
  `}
  @media screen and (max-width: ${breakpoints.mobile}px) {
    ${props => props.s_h && css`height: ${props.s_h};`}
    ${props => props.s_w && css`width: ${props.s_w};`}
  }
  @media screen and (max-width: ${breakpoints.tablet}px) {
    ${props => props.md_h && css`height: ${props.md_h};`}
    ${props => props.md_w && css`width: ${props.md_w};`}
  }
`
Container.propTypes = {
  fluid: propTypes.bool,
  fullHeight: propTypes.bool,
  flex: propTypes.bool,
  centered: propTypes.bool,
  centerMain: propTypes.bool,
  centerCross: propTypes.bool,
  width: propTypes.string,
  h: propTypes.string,
  m: propTypes.string,
  gap: propTypes.string,
  p: propTypes.string,
  bgc: propTypes.string,
  pos: propTypes.string
}
export default Container
