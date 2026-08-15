import { useState } from 'react'
import "./index.css"
import Register from './Components/Register'
import Forgott from './Components/Forgott'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import {BrowserRouter ,Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgott" element={<Forgott />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App