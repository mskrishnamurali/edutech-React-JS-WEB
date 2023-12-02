import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './Home.css'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'
function Home() {
  const handleClick=()=>{
    window.open('https://www.youtube.com/@freecodecamp','_blank')
  }
  return (
    <>
      <section className='container'>
        <div className='home-container'>
        <div className='home-content'>
            <h2 className='section_title'>Learn Everythings For Free</h2>
             <p>Master Trending technology WITH UNICORN Ai ,invest your Time and return skills</p>
        </div>
        <div className='home-btns'>
            <button className='register-btn' onClick={handleClick}>
                Get Started
            </button>

            <button className='register-btn' onClick={handleClick}>
                Watch Now!
            </button>

        </div>
        <div className='home-img'>
       <div className='home-img-wrapper'>
        <div className='box-01'>
        <div className='box-img'>
            <img src={meta} alt=''/>

        </div>

        </div>
        <div className='whatsapp-container'>
          <h5>500 + students</h5>
          < FloatingWhatsApp color='green'/>
        </div>
        <div className='support'>
            <h5>Active Support</h5>

        </div>
       </div>
        </div>
        </div>
      </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>
  )
}

export default Home
