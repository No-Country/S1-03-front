import React from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react'
import { FormContainer, InputContainer, FormInput, FormButton, Errors } from './FormStyles'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <>
        <FormContainer onSubmit={handleSubmit((data) => {
          console.log(data)
        })}>
          {errors.firstName && <Errors> {errors.firstName.message}</Errors>}
          <FormInput placeholder="First Name" autoComplete="on"
            {...register('firstName',
              {
                required: 'Name is required',
                maxLength: {
                  value: 20,
                  message: 'The name is too long'
                }
              })}
            />

          {errors.lastName && <Errors> {errors.lastName.message}</Errors>}
          <FormInput placeholder="Last Name" autoComplete="on"
            {...register('lastName',
              {
                required: 'Last name is required',
                maxLength: {
                  value: 20,
                  message: 'The Last name is too long'
                }
              })}
            />

          {errors.email && <Errors> {errors.email.message}</Errors>}
          <InputContainer>
            <Icon icon="mdi:account" />
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
          </InputContainer>

          {errors.password && <Errors> {errors.password.message}</Errors>}
          <InputContainer>
            <Icon icon="charm:eye" />
            <FormInput placeholder="Password" type='password' autoComplete="off"
            {...register('password',
              {
                required: 'password is required',
                minLength: {
                  value: 10,
                  message: 'the pasword must be at least 10 characters'
                }
              })}
            />
          </InputContainer>

          <FormButton type="submit" value="Register"/>
        </FormContainer>
    </>
  )
}

export default Register
