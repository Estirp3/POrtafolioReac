import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Quitamos ThemeProvider de ThemeContext.jsx aquí */}
    <App />
  </StrictMode>,
)
