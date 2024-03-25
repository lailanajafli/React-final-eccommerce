// Card.jsx
// Card.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from '../app/features/products/productSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';

export default function MCard(props) {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.product.cartItems);
    const { title, image, description, price, id } = props;

    const handleCard = () => {
        dispatch(addToCard(props));
    }

    const checkIfProductInStore = () => Boolean(cards?.find(el => el.id === id));

    return (
        <Card className="m-card">
            <Card.Img className="card-image" variant="top" src={image} />
            <Card.Body>
                <Card.Title className="card-title">{title} - {id}</Card.Title>
                <div className="button-container">
                    <div className="price">{price} $</div>
                    <Button disabled={checkIfProductInStore()} onClick={handleCard} variant="primary" className="add-to-cart-button">
                        {checkIfProductInStore() ? "Already in the Cart" : "Add To Cart"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
