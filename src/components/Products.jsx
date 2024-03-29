//Products.jsx

import "./products.css";
import MCard from "./Card";
import Navbar from "./navbar/Navbar";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const allProducts = useSelector((state) => state.product.items);

  useEffect(() => {
    setData(allProducts);
  }, [allProducts]);

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
      <div className="products-container">
        {data?.map((el) => (
          <MCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}
