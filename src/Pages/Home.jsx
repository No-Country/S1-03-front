import React from 'react'
import logo from './../assets/img/login-bg.jpg'
import { Icon } from '@iconify/react'

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 " id="one">
            <img src={logo} class="img-fluid rounded-start" alt="login-image" />
          </div>
          <div className="col-lg-6 bg-light rounded-end" id="two">
            <div className="row" id='login-content'>
              <div className="col">
                <h1 class="text-center title-login">Sign In</h1>
                <div class="input-group mb-3">
                  <span class="input-group-text span-color-login" id="basic-addon1">
                    {' '}
                    <Icon icon="bi:person-fill" color='white' />
                  </span>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text span-color-login" id="basic-addon1">
                    {' '}
                    <Icon icon="akar-icons:eye" color='white' />
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
               Remember me
                </label>
              </div>
              <div class="row my-5">
                <div className="col">
              <a href="#" class="text-decoration-none text-color-anchor">Forget your password?</a>

                </div>
                <div className="col-lg-5 ms-5 ps-5">
              <button class="btn-primary mx-5" type="submit" id='btn-login'>Login</button>
                  
                  </div>
              </div>
              <div class="my-5 text-center">
              <a href="#" class="text-decoration-none text-black">No account? </a>
              <a href="#" class="text-decoration-none text-color-anchor">Sign up</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
