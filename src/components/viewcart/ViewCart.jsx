// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import './ViewCart.css';
// import Navbar2 from '../navbar/Navbar2';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToCard, removeFromCard } from '../../app/features/products/productSlice';
// import { Badge } from 'react-bootstrap';

// export default function viewCart() {
//     const dispatch = useDispatch();
//     const cards = useSelector(state => state.product.cartItems);

//     const checkIfProductInStore = (id) => Boolean(cards?.find(el => el.id === id));

//     return (
//         <div>
//             <Navbar2 />
//             <div className='container' style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0 30px' }}>
//                 {cards.map(el => (
//                     <div key={el.id}>
//                         <div className="v-card">
//                             <img className="v-card-image" src={el.image} alt={el.title} />
//                             <div className='v-between'>
//                                 <div >
//                                     <p className="v-card-title">{el.title}</p>
//                                     <p className="v-card-description">{el.description}</p>
//                                 </div>
//                                 <div className="v-button-container">
//                                     <button>-</button>
//                                     <p>{el.quantitiy}</p>
//                                     <button>+</button> 
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <p className='v-total'>Total Price: {cards.reduce((a, b) => a + b.price, 0)}$</p>
//                 <button>Buy</button>
//             </div>
//         </div>
//     );
// }

















import React from "react";
import Card from "react-bootstrap/Card";
import "./ViewCart.css";
import Navbar2 from "../navbar/Navbar2";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../app/features/products/productSlice";


export default function ViewCart() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.product.cartItems);

    const DecrementQuantity = (id) => {
        dispatch(decrementQuantity({ id }));
    };

    const IncrementQuantity = (id) => {
        dispatch(incrementQuantity({ id }));
    };

    return (
        <div>
            <Navbar2 />
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    padding: "0 30px",
                }}
            >
                {cards.map((el) => (
                    <div key={el.id}>
                        <div className="v-card">
                            <img className="v-card-image" src={el.image} alt={el.title} />
                            <div className="v-between">
                                <div>
                                    <p className="v-card-title">{el.title}</p>
                                    <p className="v-card-description">{el.description}</p>
                                </div>
                                <div className="v-button-container">
                                    <button onClick={() => DecrementQuantity(el.id)}>-</button>
                                    <p style={{ color: 'black' }} >{el.quantity}</p> {/* Miktarı göstermek için el.quantity kullanıldı */}
                                    <button onClick={() => IncrementQuantity(el.id)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p className="v-total">
                    Total Price:{" "}
                    {cards.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}$
                </p>
                <button>Buy</button>
            </div>
        </div>
    );
}
