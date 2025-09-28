import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet } from 'react-router'
import ScrollToTop from './components/ScrollToTop.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
