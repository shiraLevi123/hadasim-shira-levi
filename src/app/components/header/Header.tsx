"use client";
import styles from '@/app/components/header/Header.module.css'
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <Link href="/" className={styles.logo}>
        <Image
          src="/images/Hadasim_logo_-_header.webp"
          alt="Hadassim Logo"
          width={150}
          height={50}
          priority
          style={{ 
            objectFit: 'contain',
            maxWidth: '100%',
            height: 'auto',
            borderRadius:"10%"
          }}
        />
      </Link>
          <div className={styles.logo}>MySite</div>
    
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <Link href="/form" className={styles.link}>Form</Link>
          </nav>
    
          <button className={styles.loginBtn}>Login</button>
        </header >
      );
    }