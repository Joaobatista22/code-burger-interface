import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Register, Login, Products, Cart, Admin } from '../containers'
import PrivateRoutes from './private-route'
import paths from '../constants/paths'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />

        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/produtos" />
          <Route element={<Cart />} path="/carrinho" />
        </Route>

        <Route element={<PrivateRoutes isAdmin />}>
          <Route element={<Admin />} path={paths.Order} />
          <Route element={<Admin />} path={paths.Products} />
          <Route element={<Admin />} path={paths.NewProduct} />
          <Route element={<Admin />} path={paths.EditProduct} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
