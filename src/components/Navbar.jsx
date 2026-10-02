import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/#services' },
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="navbar-logo-mark">M</span>

          <span className="navbar-logo-text">
            <strong>MUATTAR</strong>
            <small>EMBROIDERY DIGITIZER</small>
          </span>
        </Link>

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link
              to={link.to}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="navbar-cta"
        >
          Start a Project
          <span>↗</span>
        </Link>

        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen ? 'menu-open' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? 'mobile-menu-open' : ''
        }`}
      >
        <nav>
          {navLinks.map((link) => (
            <Link
              to={link.to}
              key={link.label}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <strong>↗</strong>
            </Link>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="mobile-menu-project"
          onClick={closeMenu}
        >
          Start a Project
          <span>↗</span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar