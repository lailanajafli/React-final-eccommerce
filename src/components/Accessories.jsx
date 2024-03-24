// Accessories.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import MCard from './Card';
import Navbar from './navbar/Navbar';


function Accessories() {
  const accessories = useSelector(state =>
    state.product.items.filter(item => item.title.toLowerCase().includes('gold'))
  );

  return (
    <div>
      <Navbar/>
      <div className="products-container">
        {accessories.map(product => (
          <MCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Accessories;
