import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component
import './Header.css';
import logo from '../../assets/img/logo.png';

function Header() {
  const navTitles = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: '/services',
      display: 'Services',
    },
    {
      path: '/courses',
      display: 'Courses',
    },
    {
      path: '/aboutus',
      display: 'About Us',
    },
  ];

  return (
    <div className='header'>
      <div className='nav_container'>
        <div className='logo'>
          <div className='logo-img'>
            <img src={logo} alt='' />
          </div>
          <h2>UNICORN Ai</h2>
        </div>
        <div className='navigation'>
          <ul className='menu'>
            {navTitles.map((item) => (
              <li className='nav_item' key={item.display}> {/* Move key attribute here */}
                <Link to={item.path}>{item.display}</Link> {/* Fix the placement of Link component */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

