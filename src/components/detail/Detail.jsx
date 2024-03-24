//Detail.jsx


import React from 'react';

import Card from 'react-bootstrap/Card';
import './Detail.css';
import Navbar2 from '../navbar/Navbar2';
import { useSelector, useDispatch } from 'react-redux';
import { addToCard, removeFromCard } from '../../app/features/products/productSlice';

export default function Shopping() {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.product.cartItems);

    const handleCard = (id) => {
        dispatch(addToCard(id));
    }

    const removeCard = (id) => {
        dispatch(removeFromCard(id));
    }

    const checkIfProductInStore = (id) => Boolean(cards?.find(el => el.id === id));

    return (
        <div>
            <Navbar2 />
            {cards.map(el => (
                <div key={el.id}>
                    <div className="d-card">
                        <img className="d-card-image" src={el.image} alt={el.title} />
                        <div>
                            <p className="d-card-title">{el.title}</p>
                            <p className="d-card-description">{el.description}</p>
                            <div className="d-button-container">
                                <div className="d-price">{el.price} $</div>
                            </div>
                            {checkIfProductInStore(el.id) &&
                                <button onClick={() => removeCard(el.id)} variant="danger" className="d-remove-button">X</button>
                            }
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <p>Total Price: {cards.reduce((a, b) => a + b.price, 0)}$</p>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    );
}


