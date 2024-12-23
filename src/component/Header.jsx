import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/Header.module.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#">TechNova</a>
        </div>
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul
          className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
        <div className={styles.container}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="What are you looking for?" />
            <i className="fas fa-search"></i>
          </div>
          <div className={styles.icons}>
            <i className="far fa-heart" title="Favorite"></i>
            <i className="fas fa-shopping-cart" title="Cart"></i>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
