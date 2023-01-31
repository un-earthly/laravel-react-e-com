import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './Globals/Navbar'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
