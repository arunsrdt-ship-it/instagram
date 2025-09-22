import React from 'react'
import LoginPage from './components/LoginPage'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App