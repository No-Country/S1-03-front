import React from 'react'
import propTypes from 'prop-types'

import Theme from './theme'

const Providers = ({ children }) => {
  return <Theme>{children}</Theme>
}

Providers.propTypes = {
  children: propTypes.node
}

export default Providers
