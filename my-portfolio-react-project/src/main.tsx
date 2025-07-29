import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import './Components/Styles/index.css'
import './Components/Styles/Home.css'
import './Components/Styles/Dock.css'
import './Components/Styles/About.css'
import './i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
