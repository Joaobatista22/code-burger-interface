import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

export function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.string
}
