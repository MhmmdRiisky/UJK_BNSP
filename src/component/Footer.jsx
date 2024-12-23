
import styles from '../assets/css/Footer.module.css'; // Import the CSS module

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <p className={styles.footerText}>© 2024 TechNova. All Rights Reserved.</p>
      <ul className={styles.footerLinks}>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
