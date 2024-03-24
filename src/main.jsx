//main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/detail/Detail.jsx';
import WomenProducts from './components/WomenProducts';
import MenProducts from './components/MenProducts';
// import GeneralLayout from './layouts/GeneralLayout';
import Accessories from './components/Accessories.jsx';
import Electronics from './components/Electronics.jsx';

// function createInsideComponent(component) {
//   return <GeneralLayout>{
//     }</GeneralLayout>
// }

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <GeneralLayout> */}
        <Routes>
          <Route path='/women' element={<WomenProducts />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/men' element={<MenProducts />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/' element={<App />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      {/* </GeneralLayout> */}
    </BrowserRouter>
  </Provider>
);
