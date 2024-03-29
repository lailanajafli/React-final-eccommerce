//App.jsx

import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fillBucket } from "./app/features/products/productSlice";
import Routing from "./app/Routing";
// import Drawer from './components/Drawer'
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"
  integrity="sha512-8Q6Y9XnTbOE+JNvjBQwJ2H8S+UV4uA6hiRykhdtIyDYZ2TprdNmWOUaKdGzOhyr4dCyk287OejbPvwl7lrfqrQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>;

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.items);

  async function fetchFakeData() {
    const list = await fetch("/data.json");
    const res = await list.json();
    dispatch(fillBucket(res));
  }

  useEffect(() => {
    fetchFakeData();
  }, []);



  console.log("app rendered");
  return (
      <Routing />
  );
}

export default App;
