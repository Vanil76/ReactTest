import React from 'react'
import {Link} from "react-router-dom"

import logo from "./img/logo.jpg"
import "./Header.css"

function Header() {
  return (
    <header>
        <div className='homeLogo'>
            <img src={logo} alt="logo" />
        </div>
        <nav className='homeNav'>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'sobre'}><li>Sobre</li></Link>
                <Link to={'produtos'}><li>Produtos</li></Link>
                <Link to={'contato'}><li>Contato</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header