import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Register, Login, Products, Cart } from '../containers'
import PrivateRoutes from './private-route'

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

        <Route element={<PrivateRoutes isAdmin />}></Route>
      </Routes>
    </Router>
  )
}

export default App
