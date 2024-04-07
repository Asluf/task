import React from 'react'
import './Footer.css'
import logo from '../images/4.png';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/* Column 1 */}
          <div className='col1'>
            <div className='logo-container'> {/* Added container for logo and text */}
              <img src={logo} alt='Logo' className='footer-logo' />
              <h4>AT DIGITAL</h4>
            </div>
            <p>Your goal is our target. Not anything in between. 
              We use online marketing platforms and tools to achieve 
              single objective - your business results.</p>
          </div>

          {/* Column 2 */}
          <div className='col2'>
            <h5>Our Technologies</h5>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className='col3'>
            <h5>Our Services</h5>
            <ul>
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>NodeJS</li>
            </ul>

          </div>

        </div>

        <hr />
        <div className='row'>
          <p className='col-sm'>
          Privacy Policy | Terms & Conditions
          </p>

        </div>
      </div>
      
    </div>
  )
}

export default Footer
