import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'

function AboutUs() {
  return (
    <div className='container'>
        <div className='about-us-container'>
            <div className='team-members'>
                <h2>Our Team</h2>
                <div className='member-card'>
                    <img className='member-image' src={miya} alt='Miya Dom'/>
                    <h3 className='member-name'>Miya Helinski</h3>
                    <p className='member-role'>Co-founder</p>
                </div>
                </div> 
                <div className='about-us-description'>
                 <h1 className='about-us-heading'>About Us</h1>
                 <p>
                    with a passion for empowering learners of all ages,our mission 
                    is to make education acccessible,engagaing,and personalized
                     through our cutting-edge educational technology platform.
                 </p>
                </div>

        </div>
        
      
    </div>
  )
}

export default AboutUs
