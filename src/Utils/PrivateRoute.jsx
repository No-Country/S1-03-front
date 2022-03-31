import React from 'react'
import propTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

import Auth from '../Services/auth'

const PrivateRoute = ({ component }) => {
  return Auth.auth ? component : <Navigate to="/auth" />
}

PrivateRoute.propTypes = {
  component: propTypes.element
}

export default PrivateRoute
