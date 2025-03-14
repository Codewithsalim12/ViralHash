import { useState } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-600 rounded-lg flex items-center justify-center relative group hover:from-violet-600 hover:via-purple-600 hover:to-blue-700 transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/5 rounded-lg"></div>
                <span className="text-white font-bold text-2xl select-none">#</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                ViralHash
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Generator</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/trending">Trending</NavLink>
            <NavLink to="/ai-tools">AI Tools</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/owner" className="text-violet-500 hover:text-violet-600">Support</NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Generator</MobileNavLink>
            <MobileNavLink to="/explore" onClick={() => setIsMenuOpen(false)}>Explore</MobileNavLink>
            <MobileNavLink to="/trending" onClick={() => setIsMenuOpen(false)}>Trending</MobileNavLink>
            <MobileNavLink to="/ai-tools" onClick={() => setIsMenuOpen(false)}>AI Tools</MobileNavLink>
            <MobileNavLink to="/resources" onClick={() => setIsMenuOpen(false)}>Resources</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/owner" onClick={() => setIsMenuOpen(false)} className="text-violet-500">Support</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          isActive
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
        }`
      }
    >
      {children}
    </RouterNavLink>
  )
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-3 py-2 text-base font-medium rounded-md transition-colors ${
          isActive
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
        }`
      }
    >
      {children}
    </RouterNavLink>
  )
}
