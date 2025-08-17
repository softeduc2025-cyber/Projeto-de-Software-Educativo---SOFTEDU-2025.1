import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { StrictMode } from 'react'

import { AuthProvider } from './contexts/AuthContext.tsx'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={true} />
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
