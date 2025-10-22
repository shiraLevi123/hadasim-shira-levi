"use client";
import styles from '@/app/components/footer/Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>MySite</div>

        <ul className={styles.links}>
          <li><a href="/" className={styles.link}>home</a></li>
          <li><a href="/about" className={styles.link}>about</a></li>
          <li><a href="/contact" className={styles.link}>contact</a></li>
        </ul>

        <div className={styles.socials}>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} MySite | כל הזכויות שמורות
      </div>
    </footer>
  );
}