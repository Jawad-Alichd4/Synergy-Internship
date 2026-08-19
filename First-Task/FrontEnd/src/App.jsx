import { useState } from 'react'
import "./index.css"
import Register from './Pages/Register'
import ForgotPassword from './Pages/ForgotPassword'
import Login from './Pages/Login'
import Dashboard from './ProtectedRoutes/Dashboard'
import Home from './Pages/Home'
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import VerifyEmail from './ProtectedRoutes/VerifyEmail'
import ResetPassword from './ProtectedRoutes/ResetPassword'
function App() {
  return (
    <>
      <BrowserRouter>
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
    </>
  )
}

export default App