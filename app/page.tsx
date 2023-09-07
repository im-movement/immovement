// 'use client';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';

import { FaInstagram } from 'react-icons/fa';
import { MainLayout } from './components/MainLayout';

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

const Home = () => {
  return (
    <MainLayout horizontal>
      <section className={styles.screen}>
        <h1 className={styles.heading}>IM Movement</h1>
        <Image
          className={styles.hero}
          src="/izzy.jpg"
          alt="Isabelle wearing all white standing under two chevron neon lights; one light is red and one is blue"
          width={1290}
          height={1609}
          placeholder="empty"
          blurDataURL={rgbDataURL(79, 78, 74)}
          priority
          layout="responsive"
        />
        <h2 className={styles.subHeading}>coming soon...</h2>
      </section>
      <section className={styles.screen}>
        <h2>Upcoming events</h2>
      </section>
      <section className={styles.screen}>
        <h2>Blog</h2>
      </section>
      <section className={styles.screen} id="work-with-me">
        <h2>Work with me</h2>
      </section>
      <section className={styles.screen}>
        <h2>Follow me on Instagram</h2>
        <a
          href="https://instagram.com/isabellecmuller"
          rel="noreferer"
          target="_blank">
          <FaInstagram size="2rem" color="white" />
        </a>
      </section>
    </MainLayout>
  );
};

export default Home;
