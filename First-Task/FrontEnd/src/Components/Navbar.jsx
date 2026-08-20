import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Register from "../Pages/Register"
import Login from '../Pages/Login'
import ForgotPassword from '../Pages/ForgotPassword'
import Dashboard from '../ProtectedRoutes/Dashboard'
import VerifyEmail from '../ProtectedRoutes/VerifyEmail'
import ResetPassword from '../ProtectedRoutes/ResetPassword'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Register', to: '/register' },
  { label: 'Login', to: '/login' },
  { label: 'Forgot Password', to: '/forgotPassword' },
  { label: 'Dashboard', to: '/dashboard' },
]

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <header className="border-b border-blue-100 bg-white shadow-sm">
          <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-4">
            <NavLink to="/" className="text-xl font-bold text-blue-600">
              Synergy
            </NavLink>

            <div className="flex flex-wrap items-center gap-2">
              {navItems.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar