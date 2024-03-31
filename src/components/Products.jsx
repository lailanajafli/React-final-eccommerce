//Products.jsx

import "./products.css";
import MCard from "./Card";
import Navbar from "./navbar/Navbar";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";


export default function Products() {
  const [data, setData] = useState([]);
  const allProducts = useSelector((state) => state.product.items);
  const sortBy = useSelector((state) => state.product.sortBy);

  useEffect(() => {
    setData(allProducts);
  }, [allProducts]);

  useEffect(() => {
    let sortedData = [...data];
    if (sortBy === "asc") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortBy === "desc") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setData(sortedData);
  }, [sortBy]);

  const searchTerm = useSelector((state) => state.filteredValue.value);
  useEffect(() => {
    const filteredData = allProducts.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm]);

  return (
    <div>
      <Navbar /> 
      <div className="products-header"></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <div className="big-img-card">
          <img className="img-card" src="../braclet.jpg" alt="" />
          <div className="big-card-body">
            <h1 className="card-tit">John Hardy</h1>
            <p className="card-sub-tit">Silver Dragon Station Chain Bracelet</p>
            <p className="card-infor">From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.</p>
            <button className="big-card-img-btn"> See More</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexWrap: 'wrap' }}>
          <div className="big-img-card" style={{ width: '492px' }}>
            <img className="img-card" style={{ width: '100%' }} src="../t-shirt.jpg" alt="" />
            <div className="big-card-body">
            <h1 className="card-tit">DANVOUY</h1>
            <p className="card-sub-tit">Womens T Shirt Casual Cotton Short</p>
            <p className="card-infor">95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.</p>
            <button className="big-card-img-btn"> See More</button>
          </div>
          </div>
          <div className="big-img-card" style={{ width: '492px' }}>
            <img className="img-card" style={{ width: '100%' }} src="../bags.jpg" alt="" />
            <div className="big-card-body">
            <h1 className="card-tit">Fjallraven</h1>
            <p className="card-sub-tit">Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            <p className="card-infor">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <button className="big-card-img-btn"> See More</button>
          </div>
          </div>
        </div>
      </div>

      <div className="products-container">
        {data?.map((el) => (
          <MCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}