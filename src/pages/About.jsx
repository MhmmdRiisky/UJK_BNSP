import { useState } from 'react';
import styles from '../assets/css/About.module.css'; 
import { Link } from 'react-router-dom';
import gambar from '../assets/image/gambar1.webp'; // Mengimpor gambar

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
          <div className={styles.container}>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Apa yang Anda cari?" />
              <i className="fas fa-search"></i>
            </div>
            <div className={styles.icons}>
              <i className="far fa-heart" title="Favorit"></i>
              <i className="fas fa-shopping-cart" title="Keranjang"></i>
            </div>
          </div>
        </nav>
        <hr />
      </header>

      <div className={styles.aboutContainer}>
        <h1>Tentang Kami</h1>
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <p>
              Selamat datang di TechNova! Kami adalah platform berbasis teknologi yang didedikasikan untuk memberikan cara yang mudah dan tepercaya bagi pengguna untuk membeli dan menjual barang bekas. Apakah Anda mencari elektronik, gadget, buku, atau produk unik, TechNova adalah tempat yang tepat untuk Anda.
            </p>

            <section className={styles.mission}>
              <h2>Misi Kami</h2>
              <p>
                Di TechNova, misi kami adalah memberdayakan individu dengan menyediakan pasar yang mudah dan aman untuk membeli dan menjual barang bekas. Kami bertujuan untuk menciptakan ekosistem yang berkelanjutan dengan mengurangi sampah dan mempromosikan penggunaan ulang barang, yang pada akhirnya menguntungkan lingkungan dan komunitas.
              </p>
            </section>

            <section className={styles.vision}>
              <h2>Visi Kami</h2>
              <p>
                Visi kami adalah menjadi platform terkemuka untuk produk-produk bekas, menyediakan pasar yang inovatif dan tepercaya yang menghubungkan orang-orang. Kami berusaha untuk membuat belanja barang bekas menjadi lebih mudah dan dapat diakses oleh semua orang, sekaligus mendorong budaya keberlanjutan dan konsumerisme yang sadar.
              </p>
            </section>

            <section className={styles.contactInfo}>
              <h2>Hubungi Kami</h2>
              <p>
                Jika Anda memiliki pertanyaan atau ingin menghubungi kami, silakan hubungi melalui halaman kontak atau saluran berikut:
              </p>
              <ul>
                <li>Email: <a href="mailto:support@technova.com">support@technova.com</a></li>
                <li>Telepon: +1 234 567 890</li>
                <li>Alamat: Jl. TechNova No. 123, Kota Inovasi, Techland</li>
              </ul>
            </section>
          </div>

          <div className={styles.imageContainer}>
            <img src={gambar} alt="TechNova" className={styles.aboutImage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
