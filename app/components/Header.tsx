import React from 'react';
import styles from '@/styles/Header.module.scss';
import Logo from './Logo';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const LINKS = [
  { title: 'Events', href: '/events' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '#about' },
  { title: 'Work with me', href: '#work-with-me' },
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        {/* <h1 visually-hidden>IM Movement</h1> */}
      </div>
      <nav>
        {LINKS.map(l => (
          <Link href={l.href}>{l.title}</Link>
        ))}
      </nav>
      {/* <FaInstagram className={styles.social} size="2rem" color="white" /> */}
    </header>
  );
};
