// PriceRangeSwitch.tsx
import React, { useState } from 'react';
import styles from './RangeSwitch.module.css';

interface Props {
    min: number;
    max: number;
    onChange: (value: number) => void;
  }
  
  const PriceRangeSwitch: React.FC<Props> = ({ min, max, onChange }) => {
    const [value, setValue] = useState(min);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(parseInt(e.target.value, 10));
      onChange(parseInt(e.target.value, 10));
    };
  
    return (
      <div className={styles.slideSwitch}>
        <span className={styles.minValue}>{min}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className={styles.slider}
        />
        <span className={styles.currentValue}>{value}</span>
        <span className={styles.maxValue}>{max}</span>
      </div>
    );
  };
  
  export default PriceRangeSwitch;