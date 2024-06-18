import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <NavLink to="/Accueil"><img src="./images/3.png" alt="" width={'30px'} height={'30px'} /></NavLink>
            <div className="menu" onClick={() => 
                setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''} >
                <li>
                    <NavLink to= '/Accueil'  className='title'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to= "/A_propos" className='title'>A propos</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" className='title'>Contact</NavLink>
                </li>
                <li>
                    
                    <NavLink to= "/Faq" className='title'>FAQ</NavLink>
                </li>
                    
                <li>
                    <NavLink to="/Login" className='title'>Se connecter</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;