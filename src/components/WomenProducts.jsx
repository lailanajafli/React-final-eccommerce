// WomenProducts.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import MCard from './Card';
import Navbar from './navbar/Navbar';


function WomenProducts() {
  const womenProducts = useSelector(state =>
    state.product.items.filter(item => item.title.toLowerCase().includes('women'))
  );

  return (
    <div>
      <Navbar/>
      <div className="products-container">
        {womenProducts.map(product => (
          <MCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default WomenProducts;
