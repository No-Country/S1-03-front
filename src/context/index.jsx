import React from 'react'
import propTypes from 'prop-types'

import Theme from './theme'
import Redux from './redux'

const Providers = ({ children }) => {
  return (
    <Redux>
      <Theme>{children}</Theme>
    </Redux>
  )
}

Providers.propTypes = {
  children: propTypes.node
}

export default Providers
