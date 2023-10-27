import styles from '@/styles/Home.module.scss';

import { MainLayout } from './components/MainLayout';
import { HeroImage } from './components/Images/HeroImage';
import { EventsImage } from './components/Images/EventsImage';
import { LinkButton } from './components/LinkButton';
import { Instagram } from './components/Instagram';
import { AboutImage } from './components/Images/AboutImage';

const Home = () => {
  return (
    <MainLayout horizontal>
      <section className={styles.screen}>
        <div className={styles.heroSection}>
          <HeroImage />
          <h1 className={styles.heading}>IMMOVEMENT</h1>
        </div>
      </section>
      <section className={styles.screen}>
        <div className={styles.card}>
          <h2>Events</h2>
          <EventsImage />
          <p>
            Sign up to attend live in-person events including dance classes and
            more
          </p>
        </div>
        <LinkButton title="View upcoming events" href="/events" />
      </section>
      <section className={styles.screen}>
        <h2>About</h2>
        <AboutImage />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reprehenderit expedita facere a soluta architecto ratione, alias natus
          illum tempore, laborum voluptatibus modi ipsa repellat! Necessitatibus
          dolorum atque, incidunt eligendi nam, quod dolores hic fuga distinctio
          id quis dolore vitae ex repellat aliquid, accusamus totam dolorem?
        </p>
      </section>
      <section className={styles.screen}>
        <h2>Blog</h2>
      </section>
      <section className={styles.screen} id="work-with-me">
        <h2>Work with me</h2>
      </section>
      <section className={styles.screen}>
        <div className={styles.card}>
          <h2>Follow me on Instagram</h2>
          <Instagram />
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
