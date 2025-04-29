import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Routing from './Routing/Routing.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Routing />
{/*       this is the comment of the testing of the conflict */}
    </ThemeProvider>
  </StrictMode>,
)
