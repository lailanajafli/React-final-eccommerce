// Electronics.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import MCard from './Card';
import Navbar from './navbar/Navbar';


function Electronics() {
  const electronicsProducts = useSelector(state =>
    state.product.items.filter(item => 
      !item.title.toLowerCase().includes('women') &&
      !item.title.toLowerCase().includes('men') &&
      !item.title.toLowerCase().includes('gold')
    )
  );

  return (
    <div>
      <Navbar/>
      <div className="products-container">
        {electronicsProducts.map(product => (
          <MCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Electronics;
