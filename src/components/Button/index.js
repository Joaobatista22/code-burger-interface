import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './styles'

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}
export default Button

Button.propTypes = {
  children: PropTypes.string
}
