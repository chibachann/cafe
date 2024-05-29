import * as React from 'react';
import * as styles from './Hamburger.module.css';

const Hamburger = ({ isOpen, toggleMenu }) => {
  return (
    <label className={styles.burger} onClick={toggleMenu}>
      <span className={`${styles.burgerSpan} ${isOpen ? styles.open : ''}`}></span>
      <span className={`${styles.burgerSpan} ${isOpen ? styles.open : ''}`}></span>
      <span className={`${styles.burgerSpan} ${isOpen ? styles.open : ''}`}></span>
    </label>
  );
};

export default Hamburger;
