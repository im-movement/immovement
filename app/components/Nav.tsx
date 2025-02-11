'use client';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import styles from '@/styles/Header.module.scss';

import Hamburger from 'hamburger-react';
import { oswald } from '@/styles/fonts';
import { FaInstagram } from 'react-icons/fa';

const LINKS = [
  { title: 'Events', href: '/events' },
  { title: 'About', href: '#about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Work with me', href: '#work-with-me' },
];

const VeggieBurger: React.FC = props => {
  const setMenuPosition = (e: boolean) => {
    const position = e ? '0' : '-200vw';
    document.documentElement.style.setProperty(
      '--menu-position',
      `${position}`,
    );
  };

  return (
    <>
      <Hamburger
        rounded
        label="Show menu"
        color="white"
        onToggle={setMenuPosition}
      />
      <nav className={oswald.className}>
        <div className={styles.mobileNav}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}>
              {l.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

const MobileNav: React.FC = props => {
  return (
    <div className={styles.mobileNavContainer}>
      <VeggieBurger />
    </div>
  );
};

const FullWidthNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Nav = () => {
    return (
      <div className={styles.navContainer}>
        <nav className={oswald.className}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href}>
              {l.title}
            </Link>
          ))}
        </nav>
      </div>
    );
  };

  return (
    <>
      {scrolled ? <VeggieBurger /> : <Nav />}
      <a href="https://www.instagram.com/isabellecmuller/" target="_blank">
        <FaInstagram size="2rem" color="white" />
      </a>
    </>
  );
};

export const Nav: React.FC = () => {
  return (
    <>
      <FullWidthNav />
      <MobileNav />
    </>
  );
};
