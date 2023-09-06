import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

import Logo from './Logo';
import styles from '@/styles/Header.module.scss';
import { oswald } from '@/styles/fonts';

const LINKS = [
  { title: 'Events', href: '/events' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '#about' },
  { title: 'Work with me', href: '#work-with-me' },
];

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <div className={styles.navContainer}>
        <nav className={oswald.className}>
          {LINKS.map(l => (
            <Link href={l.href}>{l.title}</Link>
          ))}
        </nav>
        <a href="https://www.instagram.com/isabellecmuller/" target="_blank">
          <FaInstagram size="2rem" color="white" />
        </a>
      </div>
    </header>
  );
};
