//Navbar2.jsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import './Navbar.css';
import Detail from '../sidebar/Sidebar';
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar2() {
    const cards = useSelector(state => state.product.cartItems);
    const [searchTerm, setSearchTerm] = useState('');


    return (
        <nav className="navbar" style={{minHeight: '168px'}}>
            <div className="menu">
                <input id="menu__toggle" type="checkbox" className='menu__toggle' />
                <label htmlFor="menu__toggle" className="menu__toggle-label">
                </label>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '9px', flexWrap: 'wrap', backgroundColor: '#2d2d2d', padding: '1rem', alignItems: 'center' }}>
                    <div className='mylogo' ><Link to="/"><img style={{ width: '78px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        src="./logo.jpg" alt="" /></Link></div>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
                    <div className="navbar-brand">
                        <FontAwesomeIcon icon={faCartShopping} size='xl' style={{ color: "#ffffff", position: 'relative', top: '11px' }} /> <div style={{backgroundColor: 'transparent'}} className='badgecount'></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar2;



