'use client';
import React from 'react';
import Link from 'next/link';

import styles from '@/styles/Header.module.scss';

import Hamburger from 'hamburger-react';
import { oswald } from '@/styles/fonts';
import { FaInstagram } from 'react-icons/fa';

const LINKS = [
  { title: 'Events', href: '/events' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '#about' },
  { title: 'Work with me', href: '#work-with-me' },
];

const MobileNav: React.FC = () => {
  const setMenuPosition = (e: boolean) => {
    const position = e ? '0' : '-200vw';
    document.documentElement.style.setProperty(
      '--menu-position',
      `${position}`,
    );
  };

  return (
    <div className={styles.mobileNavContainer}>
      <Hamburger
        rounded
        label="Show menu"
        color="white"
        onToggle={setMenuPosition}
      />
      <div className={styles.mobileNav}>
        {LINKS.map(l => (
          <Link href={l.href}>{l.title}</Link>
        ))}
      </div>
    </div>
  );
};

export const Nav: React.FC = () => {
  return (
    <>
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
      <MobileNav />
    </>
  );
};
