import { useEffect, useRef } from 'react';
import styles from '../assets/css/Main.module.css';
import { drawOnCanvas } from '../utils/Main';
import video from '../assets/video/video_intro.mp4'; // Impor video

export default function Maintenece() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      drawOnCanvas(canvas); 
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>Selamat datang di TechNova</h1>

      <p>
        Di sini, Anda akan menemukan berbagai informasi menarik tentang teknologi terbaru.
      </p>
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" /> {/* Menggunakan impor video */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
