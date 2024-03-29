
import React from "react";
import Card from "react-bootstrap/Card";
import "./ViewCart.css";
import { Link } from 'react-router-dom';
import Navbar2 from "../navbar/Navbar2";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCard } from "../../app/features/products/productSlice";


export default function ViewCart() {
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.product.cartItems);

    const DecrementQuantity = (id) => {
        dispatch(decrementQuantity({ id }));
    };

    const IncrementQuantity = (id) => {
        dispatch(incrementQuantity({ id }));
    };

    const removeCard = (id) => { 
        dispatch(removeFromCard(id));
    };


    const checkIfProductInStore = (id) => Boolean(cards?.find(el => el.id === id));
    const totalPrice = cards.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingCost = totalPrice < 150 ? 4 : 0;
    const finalPrice = totalPrice + shippingCost;

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
                <div className="middle">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {cards.map((el) => (
                            <div key={el.id}>
                                <div className="v-card">
                                    <div className="v-between">
                                        <div>
                                            <img className="v-card-image" src={el.image} alt={el.title} />
                                        </div>
                                        <div>
                                            <p className="v-card-title">{el.title}</p>
                                            <p className="v-card-description">{el.description}</p>
                                        </div>
                                        <div className="v-button-container">
                                            <button onClick={() => DecrementQuantity(el.id)}>-</button>
                                            <p style={{ color: 'black' }} >{el.quantity}</p>
                                            <button onClick={() => IncrementQuantity(el.id)}>+</button>
                                        </div>
                                        <div>
                                            <p className="d-price">{el.price}$</p>
                                        </div>
                                    </div>
                                    <div>
                                        {checkIfProductInStore(el.id) &&
                                            <button onClick={() => removeCard(el.id)} variant="danger" className="v-remove-button">X</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="v-checkout">
                        <div>
                            <p>Order Summary</p>
                            <p className="v-total">
                                Total Price:{" "}
                                <span> {totalPrice.toFixed(2)}$</span>
                            </p>
                            <p>Cargo: <span> {shippingCost}$</span></p>
                            {totalPrice > 150 && <p className="freeCargo">Free Cargo for $150 and Above (Seller Pays): <span> -4$</span></p>}
                            <div className="line"></div>
                            <p>Final Price: <span> {finalPrice.toFixed(2)}$</span></p>
                            <Link to='/pay'><button className="add-to-cart-button">Confirm Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

