// Electronics.jsx

import MCard from "./Card";
import Navbar from "./navbar/Navbar";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function Electronics() {
  const [data, setData] = useState([]);
  const allProducts = useSelector((state) => state.product.items);

  let electronicsProducts = allProducts.filter(
    (item) =>
      !item.title.toLowerCase().includes("women") &&
      !item.title.toLowerCase().includes("men") &&
      !item.title.toLowerCase().includes("gold")
  );

  useEffect(() => {
    setData(electronicsProducts);
  }, [allProducts]);

  const searchTerm = useSelector((state) => state.filteredValue.value);

  useEffect(() => {
    const filteredData = electronicsProducts.filter(({ title }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  }, [searchTerm]);
  return (
    <div>
      <Navbar />
      <div className="products-container">
        {data.map((product) => (
          <MCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Electronics;
