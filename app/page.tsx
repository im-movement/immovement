import styles from '@/styles/Home.module.scss';

import { FaInstagram } from 'react-icons/fa';
import { MainLayout } from './components/MainLayout';
import { HeroImage } from './components/HeroImage';

const Home = () => {
  return (
    <MainLayout horizontal>
      <section className={styles.screen}>
        <h1 className={styles.heading}>IM Movement</h1>
        <HeroImage />
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
