import React from 'react'
import { useForm } from 'react-hook-form'
import logo from '../../assets/img/login-bg.jpg'
import { Icon } from '@iconify/react'
import styled from 'styled-components'
import { palette } from '../../config/theme'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  return (
    <>
      <div className="container">
        <form
          noValidate
          onSubmit={handleSubmit((data) => {
            console.log(data)
          })}>
          <div className="row g-0">
            <div className="col-lg-6 " id="one">
              <img
                src={logo}
                className="img-fluid rounded-start"
                alt="login-image"
              />
            </div>
            <div className="col-lg-6 bg-light rounded-end" id="two">
              <div className="row" id="login-content">
                <div className="col">
                  <h1 className="text-center title-login">Sign In</h1>
                  {errors.email && <Errors> {errors.email.message}</Errors>}
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text span-color-login"
                      id="basic-addon1">
                      {' '}
                      <Icon icon="bi:person-fill" color="white" />
                    </span>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
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
                  </div>

                  {errors.password && <Errors> {errors.password.message}</Errors>}
                  <div className="input-group mb-3">
                    <span
                      className="input-group-text span-color-login"
                      id="basic-addon1">
                      {' '}
                      <Icon icon="akar-icons:eye" color="white" />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      {...register('password', {
                        required: 'password is required',
                        minLength: {
                          value: 10,
                          message: 'the pasword must be at least 10 characters'
                        }
                      })}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault">
                      Remember me
                    </label>
                  </div>
                  <div className="row my-5">
                    <div className="col">
                      <a
                        href="#"
                        className="text-decoration-none text-color-anchor">
                        Forget your password?
                      </a>
                    </div>
                    <div className="col-lg-5 ms-5 ps-5">
                      <button
                        className="btn-primary mx-5"
                        type="submit"
                        id="btn-login">
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="my-5 text-center">
                    <a href="#" className="text-decoration-none text-black">
                      No account?{' '}
                    </a>
                    <a
                      href="#"
                      className="text-decoration-none text-color-anchor">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

const Errors = styled.span`
  display: block;
  color: ${palette.red};
  font-size: 0.7rem;

`

export default Login
