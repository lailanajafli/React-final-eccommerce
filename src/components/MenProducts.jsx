// MenProducts.jsx

import MCard from "./Card";
import Navbar from "./navbar/Navbar";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

function MenProducts() {
  const [data, setData] = useState([]);
  const allProducts = useSelector((state) => state.product.items);

  let menProducts = allProducts.filter((item) =>
  item.title.toLowerCase().startsWith("mens")
  );

  useEffect(() => {
    setData(menProducts);
  }, [allProducts]);

  const searchTerm = useSelector((state) => state.filteredValue.value);

  useEffect(() => {
    const filteredData = menProducts.filter(({ title }) =>
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

export default MenProducts;
