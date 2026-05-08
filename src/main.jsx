import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const RootLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='flex min-h-0 flex-1 flex-col'>
        <App />
      </div>
      <Footer />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  </StrictMode>,
)
