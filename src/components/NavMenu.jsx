import { Link } from 'react-router-dom'

const NavMenu = () => {
    
  return (
    <nav>
      <menu>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
      </menu>
    </nav>
  )
}

export default NavMenu