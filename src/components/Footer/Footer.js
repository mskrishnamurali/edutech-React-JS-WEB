import React from 'react';
import './Footer.css';
import footer from '../../assets/img/footer.png';
import { Link } from 'react-router-dom';

function Footer() {
  const handleClick=()=>{
    window.scrollTo(0,0)
  }
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>
          <div className='footer-box'>
            <div className='logo'>
              <div className='logo-img'>
                <img src={footer} alt='' />
              </div>
              <h2>UNICORN Ai</h2>
            </div>
            <p>embrace the future innovation and technology with unicorn</p>
          </div>
          <div className='footer-box'>
            <h4 className='footer_title'>Company</h4>
            <ul className='footer_links'>
              <li>
                <Link to='/courses'>Our Programs</Link>
              </li>
              <li>
              <Link to='./services'>Our Plans</Link>
              </li>
              <li>
                <a href=''>Become a member</a>
              </li>
            </ul>
          </div>
          <div className='footer-box'>
            {/* Missing closing brace */}
          </div>
          <h4 className='footer_title'>Quick Links</h4>
          <ul className='footer_links'>
            <li>
              <Link to='/about' onClick={handleClick}>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/support'>Support Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
