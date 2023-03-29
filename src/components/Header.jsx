import React from 'react'
import logo from './img/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="navbar">
          <a href="#" className='logo'><img src={logo}/></a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
          <button>Login</button>
        </div>
        <form>
        <input type="text" placeholder='Enter an address, neighborhood, city, or ZIP code' />
          <button><i class="fas fa-search"></i>Search</button>
        </form>
        <div className="info">
          <h1>Properties</h1>
          <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
          <p><b>13,474</b> results</p>
        </div>
    </div>
  )
}

export default Header