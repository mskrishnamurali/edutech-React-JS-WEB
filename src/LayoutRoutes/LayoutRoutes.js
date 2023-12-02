import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import AboutUs from '../components/Pages/AboutUs/AboutUs'
import ContactUs from '../components/Pages/ContactUs/ContactUs'
import Support from '../components/Pages/Support/Support'
function LayoutRoutes() {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/edutech-React-JS-WEB' element={<Home/>}></Route>
             <Route path='/services' element={<Plans/>}></Route>
             <Route path='/courses' element={<Courses/>}></Route>
             <Route path='/aboutus' element={<AboutUs/>}></Route>
             <Route path='/contact' element={<ContactUs/>}></Route>
             <Route path='/support' element={<Support/>}></Route>
            </Routes>
            <Footer/>
        </Router>
      
    </div>
  )
}

export default LayoutRoutes
