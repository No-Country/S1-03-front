import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { palette } from '../../config/theme'
const Email = () => {
  const { register, formState: { errors } } = useForm()
  return (
    <>
      {errors.email && <Errors> {errors.email.message}</Errors>}
      <FormInput placeholder="Email" autoComplete="off"
        {...register('email',
          {
            required: 'Enter the email',
            minLength: {
              value: 12,
              message: 'The email is too short'
            },
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email'
            }
          })}
        />
    </>
  )
}

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

export default Email
