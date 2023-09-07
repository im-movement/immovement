import React from 'react';
import Link from 'next/link';

import Logo from './Logo';
import { Nav } from './Nav';

import styles from '@/styles/Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <Nav />
    </header>
  );
};
