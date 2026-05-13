import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProvider } from './context/AppContext.tsx';

export const authService = import.meta.env.VITE_AUTH_SERVICE || 'http://localhost:5000';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1092907966191-u3a43c58fg0aj18vm2vn3v1nvh0h8rf0.apps.googleusercontent.com">
        
        <AppProvider>
        <App />
        </AppProvider>
      </GoogleOAuthProvider>
  </StrictMode>,
)
