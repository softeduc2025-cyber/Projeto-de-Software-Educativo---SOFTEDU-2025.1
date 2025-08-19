import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { StrictMode } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AuthProvider } from './contexts/AuthContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={'pt-br'}>
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={true} />
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </LocalizationProvider>
  </StrictMode>,
)
