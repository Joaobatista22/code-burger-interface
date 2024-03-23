// Importações necessárias
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Componentes para as rotas
import Login from '../containers/Login'
import Register from '../containers/Register'

// Componente principal
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
