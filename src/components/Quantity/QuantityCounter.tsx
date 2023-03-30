import React, { useState } from 'react';
import styles from './QuantityCounter.module.css';

interface Props {
  onQuantityChange: (quantity: number) => void;
  price: number;
}

const QuantityCounter: React.FC<Props> = ({ onQuantityChange, price }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className={styles.quantityCounter}>
      <div className={styles.buttonsContainer}>
        <button onClick={decreaseQuantity} className={styles.counterButton}>
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button onClick={increaseQuantity} className={styles.counterButton}>
          +
        </button>
      </div>
      <div className={styles.totalPrice}>
        Total: ${(price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default QuantityCounter;