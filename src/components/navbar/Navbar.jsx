//Navbar.jsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import './Navbar.css';
import Detail from '../detail/Detail';
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {
  const cards = useSelector(state => state.product.cartItems);
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <nav className="navbar">
      <div className="menu">
        <input id="menu__toggle" type="checkbox" className='menu__toggle' />
        <label htmlFor="menu__toggle" className="menu__toggle-label">
          <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24' className='hide-svg'>
            <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
          </svg>
          <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24' >
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </label>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '9px', flexWrap: 'wrap', backgroundColor: '#2d2d2d', padding: '1rem', alignItems: 'center' }}>
          <div className='mylogo' ><Link to="/"><img style={{ width: '78px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            src="./logo.jpg" alt="" /></Link></div>
          <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
          <Link to="/detail" className="navbar-brand">
            <FontAwesomeIcon icon={faCartShopping} size='xl' style={{ color: "#ffffff", position: 'relative', top: '11px' }} /> <div className='badgecount'> <Badge >{cards.length}</Badge></div>
          </Link>
        </div>
        <div >
          <div className='colorButton'>
            <Link className='name' to="/">Home</Link>
            <Link className='name' to="/women">Women</Link>
            <Link className='name' to="/men">Men</Link>
            <Link className='name' to="/accessories">Accessories</Link>
            <Link className='name' to="/electronics">Electronics</Link>
          </div>
          <div className='colorFull'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#0e00d1", }} />
              <FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#0e00d1", }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div>
                <img style={{ width: '194px' }} src="./flower.png" alt="" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p className='navText1'>Up to 30% of fresh finds.</p>
                <p className='navText2'>Limited time only . Selected styles marked down as shown</p>
              </div>
              <div>
                <img style={{ width: '194px' }} src="./flowerl.png" alt="" />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#0e00d1", }} />
              <FontAwesomeIcon icon={faStar} size="xl" style={{ color: "#0e00d1", }} />
            </div>
          </div>
        </div>

        <ol className='menu__content'>
          <li className="menu-item"><Link className='link' to="/">Home</Link></li>
          <li className="menu-item"><Link className='link' to="/women">Women</Link></li>
          <li className="menu-item"><Link className='link' to="/men">Men</Link></li>
          <li className="menu-item"><Link className='link' to="/accessories">Accessories</Link></li>
          <li className="menu-item"><Link className='link' to="/electronics">Electronics</Link></li>
          <li className="menu-item"><Link className='link' to="/low">Price high to low</Link></li>
          <li className="menu-item"><Link className='link' to="/high">Price low to high</Link></li>
        </ol>
      </div>
    </nav>
  );
}

export default Navbar;

