// MenProducts.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import MCard from './Card';
import Navbar from './navbar/Navbar';


function MenProducts() {
  const menProducts = useSelector(state =>
    state.product.items.filter(item => item.title.toLowerCase().startsWith('mens'))
  );

  return (
    <div>
      <Navbar/>
      <div className="products-container">
        {menProducts.map(product => (
          <MCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default MenProducts;
