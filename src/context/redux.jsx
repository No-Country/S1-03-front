import React from 'react'
import propTypes from 'prop-types'
import { Provider } from 'react-redux'

import store from '../redux/store'

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
ReduxProvider.propTypes = {
  children: propTypes.node
}
export default ReduxProvider
