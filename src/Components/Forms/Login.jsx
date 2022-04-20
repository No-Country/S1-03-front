import React from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import {
  FormContainer,
  InputContainer,
  FormInput,
  FormButton,
  FormCheckBox,
  FormDiv,
  Errors
} from './FormStyles'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  return (
    <>
      <FormContainer
        onSubmit={handleSubmit((data) => {
          console.log(data)
          navigate('/')
        })}>
        {errors.email && <Errors> {errors.email.message}</Errors>}
        <InputContainer>
          <Icon icon="mdi:account" />
          <FormInput
            placeholder="Email"
            autoComplete="off"
            {...register('email', {
              required: 'Enter the email',
              minLength: {
                value: 12,
                message: 'The email is too short'
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email'
              }
            })}
          />
        </InputContainer>

        {errors.password && <Errors> {errors.password.message}</Errors>}
        <InputContainer>
          <Icon icon="charm:eye" />
          <FormInput
            placeholder="Password"
            type="password"
            autoComplete="off"
            {...register('password', {
              required: 'password is required',
              minLength: {
                value: 10,
                message: 'the pasword must be at least 10 characters'
              }
            })}
          />
        </InputContainer>
        <FormDiv>
          <FormCheckBox></FormCheckBox>
          <label htmlFor="">Remember me</label>
          <FormButton type="submit" value="Login" />
        </FormDiv>
      </FormContainer>
    </>
  )
}

export default Form
