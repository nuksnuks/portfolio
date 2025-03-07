import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'
import LandingPage from './pages/LandingPage.jsx'
import Projects from './pages/Projects.jsx'
import NavMenu from './components/NavMenu.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <NavMenu />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)