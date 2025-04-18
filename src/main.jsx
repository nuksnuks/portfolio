import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Index from './pages/Index.jsx'
import Projects from './pages/Projects.jsx'
import NavMenu from './components/NavMenu.jsx'
import Footer from './components/Footer.jsx'
import ThreeDBackground from './components/ThreeDBackground.jsx'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Adjust this time based on your actual loading time

    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <ThreeDBackground />
      <NavMenu />
      <main>
        <Router basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </Router>
      </main>
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)