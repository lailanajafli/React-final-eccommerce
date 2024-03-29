// Accessories.jsx
// Accessories.jsx

import MCard from "./Card";
import Navbar from "./navbar/Navbar";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function Accessories() {
  const [data, setData] = useState([]);
  const allProducts = useSelector((state) => state.product.items);

  let accessories = allProducts.filter((item) =>
    item.title.toLowerCase().includes("gold")
  );

  useEffect(() => {
    setData(accessories);
  }, [allProducts]);

  const searchTerm = useSelector((state) => state.filteredValue.value);

  useEffect(() => {
    const filteredData = accessories.filter(({ title }) =>
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

export default Accessories;
