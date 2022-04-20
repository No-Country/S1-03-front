import styled from 'styled-components'
import { palette } from '../../config/theme'

export const FormContainer = styled.form`
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  vertical-align: middle;
  & > svg {
    background-color: ${palette.blue};
    font-size: 2.5rem;
    padding: 6px;
    color: ${palette.white}
  }
`

export const FormInput = styled.input`
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
export const FormButton = styled.input`
  background-color: ${palette.blue};
  color: ${palette.white};
  padding: 10px 25px;
  text-align: center;
  border: none;
  float: right;
  transition: background-color .2s;
  cursor: pointer;
  &:hover {
    background-color: ${palette.green};
  }
`

export const Errors = styled.span`
  display: block;
  color: ${palette.red};
  font-size: 0.7rem;

`

export const FormCheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin-bottom: 10px;
  padding: 10px;
  &:label{
    margin-left: 10px;
  }
`

export const FormDiv = styled.div`
 display: revert;
`
