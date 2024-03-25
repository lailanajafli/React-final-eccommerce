// Card.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard, removeFromCard } from '../app/features/products/productSlice';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import './Card.css';

export default function MCard(props) {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.product.cartItems);
    const { title, image, description, price, isShoppingCard, id } = props;
    const [showFullDescription] = useState(false);

    const handleCard = () => {
        dispatch(addToCard(props));
    }

    const removeCard = () => {
        dispatch(removeFromCard(id));
    }

    const checkIfProductInStore = () => Boolean(cards?.find(el => el.id === id));

    const getFirst30Characters = (text) => {
        let trimmedText = text.trim();
        let truncatedText = '';

        for (let i = 0; i < trimmedText.length; i++) {
            if (i < 30) {
                truncatedText += trimmedText[i];
            } else {
                break;
            }
        }

        return truncatedText;
    }

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
