import propTypes from 'prop-types'
import styled, { css } from 'styled-components'

// prettier-ignore
const Container = styled.div`
  width: ${props => props.w || '100%'};
  margin: ${props => props.margin || '0 auto'};
  height: ${props => props.h || '100%'};
  max-width: ${props => (props.fluid ? '100%' : '90%')};
  ${props => props.fullHeight && css`min-height: 100vh;`}
  ${props => props.p && css`padding: ${props.p};`}
  ${props => props.flex && css`display: flex;`}
  ${props => props.flex && props.centerMain && css`justify-content: center;`}
  ${props => props.flex && props.centerCross && css`align-items: center;`}
  ${props => props.flex && props.gap && css`gap: ${props.gap};`}
  ${props => props.flex && props.centered && css`
    align-items: center;
    justify-content: center;
  `}
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
  p: propTypes.string
}
export default Container
