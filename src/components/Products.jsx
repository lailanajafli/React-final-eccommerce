//Products.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fillBucket } from "../app/features/products/productSlice";
import './products.css';
import MCard from "./Card";
import { FiAlignJustify } from "react-icons/fi";

export default function Products() {
    const [localSortedItems, setLocalSortedItems] = useState([]);
    const dispatch = useDispatch();
    const items = useSelector((state) => state.product.items);

    useEffect(() => {
        async function fetchFakeData() {
            const list = await fetch("/data.json");
            const res = await list.json();
            dispatch(fillBucket(res));
        }
        if (!items.length) {
            fetchFakeData();
        } else {
            setLocalSortedItems([...items]);
        }
    }, [dispatch, items]);

    return (
        <div>
            <div className="products-header">

            </div>
            <div className="products-container"> {}
                {localSortedItems.map((el) => (
                    <MCard key={el.id} {...el} />
                ))}
            </div>
        </div>
    );
}
