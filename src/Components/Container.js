import propTypes from 'prop-types'
import styled, { css } from 'styled-components'

// prettier-ignore
const Container = styled.div`
  width: 100%;
  max-width: ${props => (props.fluid ? '100%' : '90%')};
  ${props => props.fullHeight && css`min-height: 100vh;`}
  ${props => props.flex && css`display: flex;`}
  ${props => props.flex && props.centered && css`
      align-items: center;
      justify-content: center;
  `}
`
Container.propTypes = {
  fluid: propTypes.bool,
  fullHeight: propTypes.bool,
  flex: propTypes.bool,
  centered: propTypes.bool
}
export default Container
