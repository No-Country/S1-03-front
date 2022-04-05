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
                <h4 class="">Sign In</h4>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    {' '}
                    <Icon icon="bi:person-fill" />
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
                  <span class="input-group-text" id="basic-addon1">
                    {' '}
                    <Icon icon="akar-icons:eye" />
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
              <div>
              <a href="#">Forget your password?</a>
              <button class="btn btn-primary mx-5" type="submit">Login</button>
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
