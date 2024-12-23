import styles from '../assets/css/Content.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <ul>
          <li>Technology</li>
          <li>Electronik</li>
          <li>Books</li>
          <li>Sports</li>
        </ul>
      </aside>

      <main className={styles.mainContent}>
        <section className={styles.banner}>
          <div className={styles.bannerItem}>
            <div className={styles.box} style={{ backgroundColor: ' #1146f7' }}></div>
            <h1 className={styles.legend}>Jelajahi Inovasi Teknologi</h1>
            <h1 className={styles.legends}>Di TechNova, kami menyediakan produk, inovasi, tren, dan solusi terbaru langsung ke depan pintumu.
            Jelajahi berbagai produk dan layanan kami yang disesuaikan untukmu.</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
