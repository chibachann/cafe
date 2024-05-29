import * as React from 'react';
import * as styles from './header.module.css';
import { Link } from 'gatsby';

import Hamburger from './Hamburger';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} ${isOpen ? styles.headerOpen : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src="images/common/Logo.png" alt="logo" />
        </div>
        <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/secound">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
