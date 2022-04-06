import React from 'react'
import { useForm } from 'react-hook-form'
import { Errors, FormInput } from './Styles'
const Password = () => {
  const { register, formState: { errors } } = useForm()
  return (
    <>
    {errors.password && <Errors> {errors.password.message}</Errors>}
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
    </>
  )
}

export default Password
