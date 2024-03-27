
// Sidebar.jsx

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCard, removeFromCard } from '../../app/features/products/productSlice';
import './Sidebar.css'; 

export default function Sidebar({ isOpen, toggleSidebar }) {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.product.cartItems);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleCard = (id) => {
        dispatch(addToCard(id));
    }

    const removeCard = (id) => {
        dispatch(removeFromCard(id));
    }

    const checkIfProductInStore = (id) => Boolean(cards?.find(el => el.id === id));

    const handleCloseSidebar = () => {
        toggleSidebar();
    }

    return (
        <>
            <div>
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <div className="sidebar-content">
                        <button className="close-button" onClick={handleCloseSidebar}>X</button>
                        <div className="d-cards-container">
                            {cards.map(el => (
                                <div key={el.id} className="d-card">
                                    <div id={`check${el.id}`} />
                                    <div htmlFor={`check${el.id}`}></div>
                                    <img className="d-card-image" src={el.image} alt={el.title} />
                                    <div className="details">
                                        <p className="d-card-title">{el.title}</p>
                                        <div className="d-button-container">
                                            <div className="d-price">{el.price} $</div>
                                            {checkIfProductInStore(el.id) &&
                                                <button onClick={() => removeCard(el.id)} variant="danger" className="d-remove-button">X</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="checkout">
                        <p>Total Price: <span> {cards.reduce((a, b) => a + b.price, 0)}$</span></p>
                        <Link to="/viewcart"><button className="add-to-cart-button">View Cart</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
