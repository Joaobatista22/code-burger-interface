import React from 'react'
// import { createRoot } from 'react-dom' // Correção na importação de createRoot
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
import { UserProvider } from './hooks/UserContext'

// Crie o root corretamente
const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>

    <ToastContainer autoClose={3000} />
    <GlobalStyles />
  </>
)
