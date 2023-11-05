import React, { useState } from 'react';
import './TicketContainer.css'; // 

const TicketContainer = ({ ticketType, description, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value >= 0 ? value : 0);
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const addToCart = () => {
    // Implement add to cart functionality
    console.log(`Added ${quantity} ${ticketType} tickets to cart`);
  };

  return (
    <div className="ticket-container">
      <h2>{ticketType}</h2>
      <p>{description}</p>
      <p>Price: {price.toFixed(2)} SEK</p>
      <div className="ticket-quantity">
        <button className="ticket-quantity-button" onClick={decrementQuantity}>&ndash;</button>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <button className="ticket-quantity-button" onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={addToCart} className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default TicketContainer;
