import React, { useState, FormEvent } from 'react';
import styles from './Subscription.module.css';

const SubscriptionModule: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Process subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className={styles.subscriptionModule}>
      <h2 className={styles.title}>Join Us</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          placeholder="Enter your email"
          required
        />
        <button type="submit" className={styles.subscribeButton}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionModule;