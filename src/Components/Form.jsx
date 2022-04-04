import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit } = useForm()
  return (
    <>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <input {...register('firstname')} placeholder="First Name"/>
        <input {...register('lastname')} placeholder="Last Name"/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Form
