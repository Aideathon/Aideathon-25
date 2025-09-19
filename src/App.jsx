import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Home'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Problems from './pages/Problems'
import Patron from './pages/Patron'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Navbar />
      <main className="container" style={{paddingTop:18, paddingBottom:40}}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/patron" element={<Patron />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
