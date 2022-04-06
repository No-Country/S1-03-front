import styled from 'styled-components'
import { palette } from '../../config/theme'

const FormInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  display: block;
  padding: 10px;
  outline: none;
  border: none;
  background: ${props => props.theme.inputBg};
  transition: box-shadow .2s;
  &::placeholder {
    color: ${props => props.theme.inputPlaceholder};
  }
  &:focus {
    box-shadow: inset 0px -1px 1px 0px ${palette.blue};
  }
`

const Errors = styled.span`
  display: block;
  color: ${palette.red};
  font-size: 0.7rem;

`

export default { Errors, FormInput }
