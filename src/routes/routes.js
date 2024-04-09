import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/Home'
import Register from '../containers/Register'
import Login from '../containers/Login'
import PrivateRoutes from './private-route'
import Products from '../containers/Products'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />

        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/produtos" />
        </Route>

        <Route element={<PrivateRoutes isAdmin />}></Route>
      </Routes>
    </Router>
  )
}

export default App
