import React from 'react'
import { createRoot } from 'react-dom/client' // Importe createRoot corretamente
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import GlobalStyles from './styles/globalStyles'
import { UserProvider } from './hooks/UserContext'

const root = createRoot(document.getElementById('root')) // Use createRoot corretamente

root.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>

    <ToastContainer autoClose={3000} />
    <GlobalStyles />
  </>
)
