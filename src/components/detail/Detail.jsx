

import React from 'react';
import MCard from '../Card';
import './Detail.css';
import Navbar2 from '../navbar/Navbar2';
import { useSelector } from 'react-redux';

export default function Shopping() {
    const cards = useSelector(state => state.product.cartItems);

    return (
        <div>
                <Navbar2/>
                {cards.map(el => <MCard key={el.id} isShoppingCard={true} {...el} />)}
                <div>
                    <p>Total Price: {cards.reduce((a, b) => a + b.price, 0)}$</p>
                    <button>Proceed to Checkout</button>
                </div>
            </div>

    );
}
