import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { StrictMode } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'

import AuthProvider from './contexts/AuthContext.tsx'
import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>

      <LocalizationProvider
        adapterLocale="pt-br"
        dateAdapter={AdapterDayjs}
      >
        <Toaster position="top-right" reverseOrder />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalizationProvider>

    </AuthProvider>
  </StrictMode>
)
