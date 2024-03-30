

import React from 'react'
import WomenProducts from '../components/WomenProducts'
import Accessories from '../components/Accessories'
import MenProducts from '../components/MenProducts'
import Electronics from '../components/Electronics'
import Products from '../components/Products'
import ViewCart from '../components/viewcart/ViewCart'
import Pay from '../components/pay/Pay'
import { Route, Routes } from 'react-router'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/women" element={<WomenProducts />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/men" element={<MenProducts />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
  )
}

export default Routing