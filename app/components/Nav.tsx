'use client';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import styles from '@/styles/Header.module.scss';

import Hamburger from 'hamburger-react';
import { inter, oswald } from '@/styles/fonts';
import { FaInstagram } from 'react-icons/fa';
import { useViewportSize } from '../../hooks/useViewportSize';

const LINKS = [
  { title: 'Events', href: '/events' },
  { title: 'About', href: '#about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Work with me', href: '#work-with-me' },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/isabellecmuller/',
    icon: <FaInstagram size="1.75rem" color="white" />,
    isExternal: true,
  },
];

interface NavItemProps {
  item: {
    title?: string;
    href: string;
    icon?: React.ReactNode;
    isExternal?: boolean;
  };
}
const NavItem: React.FC<NavItemProps> = props => {
  const { item } = props;

  if (item.isExternal) {
    return (
      <a
        aria-label={item.title}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}>
        {item.icon ?? item.title}
      </a>
    );
  }

  return (
    <Link key={props.item.href} href={props.item.href}>
      {item.icon ? item.icon : item.title}
    </Link>
  );
};

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
        size={24}
      />
      <nav className={`${oswald.className} ${styles.mobileNav}`}>
        {LINKS.map((l, i) => (
          <NavItem key={i} item={l} />
        ))}
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
const NavView = () => {
  return (
    // <div className={styles.navContainer}>
    <nav className={oswald.className}>
      {LINKS.map((l, i) => (
        <NavItem key={i} item={l} />
      ))}
    </nav>
    // </div>
  );
};

const FullWidthNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
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

  return <>{scrolled ? <VeggieBurger /> : <NavView />}</>;
};

export const Nav: React.FC = () => {
  const { width } = useViewportSize();

  if (width < 720) {
    return <MobileNav />;
  }

  return <FullWidthNav />;
};
