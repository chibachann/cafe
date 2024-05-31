import * as React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="/images/common/Footer_Logo.png" alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <div className={styles.bar}></div>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>MENU</li>
          <li>ACCESS</li>
        </ul>
        <div className={styles.bar}></div>
      </nav>
      <div className={styles.info}>
        <p>プライバシーポリシー</p>
        <p>お問合せ</p>
      </div>
    </footer>
  );
};

export default Footer;
