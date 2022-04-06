import React from 'react'
import { Errors, FormInput } from './Styles'

const Name = () => {
  return (
    <>
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
    </>
  )
}

export default Name
