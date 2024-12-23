import { useState } from 'react';
import styles from '../assets/css/Contact.module.css';
import { Link } from 'react-router-dom';

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false); // Menambahkan state untuk menu toggle

  return (
    <>
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
          <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
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
              <Link to="/signUp">Sign Up</Link>
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

      <div className={styles.contactContainer}>
        <h2 className={styles.contactHeading}>Contact Us</h2>

        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className={styles.contactInfo}>
          <div className={styles.address}>
            <i className="fas fa-map-marker-alt"></i>
            <p>123 TechNova Street, Silicon Valley, CA</p>
          </div>
          <div className={styles.email}>
            <i className="fas fa-envelope"></i>
            <p>contact@technova.com</p>
          </div>
          <div className={styles.phone}>
            <i className="fas fa-phone"></i>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
