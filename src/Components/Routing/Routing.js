import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

const Routing = () => {
  return (
    
    <BrowserRouter>
       <Navbar />
       <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/skills' element={<Skills />}/>
           <Route path='/projects' element={<Projects />}/>
           <Route path='/contact' element={<Contact />}/>
       </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default Routing