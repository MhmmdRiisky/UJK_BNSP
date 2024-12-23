import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/SignUp.module.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Sign Up Successful!');
  };

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a href="#">TechNova</a>
          </div>
          <ul className={styles.navLinks}>
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
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>

      <div className={styles.signUpContainer}>
        <h2 className={styles.signUpHeading}>Sign Up</h2>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
        </form>
        <p className={styles.signUpFooter}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
