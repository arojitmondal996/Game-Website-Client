import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './components/AuthProvider/AuthPRovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}></AuthProvider>
  </StrictMode>,
)
