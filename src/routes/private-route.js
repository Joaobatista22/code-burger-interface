import PropTypes from 'prop-types'
import React from 'react'
import { Navigate, Route } from 'react-router-dom'

function PrivateRoute({ component: Component, isAdmin, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />
  }

  // Renderiza o componente se as condições forem atendidas
  return <Route {...rest} element={<Component />} />
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  isAdmin: PropTypes.bool
}

export default PrivateRoute
