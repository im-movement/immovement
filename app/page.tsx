import styles from '@/styles/Home.module.scss';

import { FaInstagram } from 'react-icons/fa';
import { MainLayout } from './components/MainLayout';
import { HeroImage } from './components/HeroImage';
import { useEffect } from 'react';
import { EventsImage } from './components/EventsImage';
import { Button } from './components/Button';
import { LinkButton } from './components/LinkButton';
import { Instagram } from './components/Instagram';

const Home = () => {
  // const scroll = () => console.log('scroll');
  // setTimeout(scroll, 300);
  // console.log('hello?');
  return (
    <MainLayout horizontal>
      <section className={styles.screen}>
        <h1 className={styles.heading}>IMMOVEMENT</h1>
        <HeroImage />
      </section>
      <section className={styles.screen}>
        <h2>Events</h2>
        <EventsImage />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          ullam praesentium officia incidunt, placeat eos deserunt doloribus
          labore, ipsa iure dolorum similique aspernatur eligendi. Magnam,
          quibusdam eius. Molestiae non labore impedit recusandae aut fugiat sit
          quae, corporis expedita. Dolores eum molestiae, error esse numquam
          impedit vel neque vitae iste inventore!
        </p>
        <LinkButton title="View upcoming events" href="/events" />
      </section>
      <section className={styles.screen}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reprehenderit expedita facere a soluta architecto ratione, alias natus
          illum tempore, laborum voluptatibus modi ipsa repellat! Necessitatibus
          dolorum atque, incidunt eligendi nam, quod dolores hic fuga distinctio
          id quis dolore vitae ex repellat aliquid, accusamus totam dolorem?
          Tempora ratione ut aut illo eligendi repellendus asperiores nesciunt
          voluptatem voluptatum in, aperiam facilis similique eum, blanditiis
          error laudantium. Laudantium, repellat harum modi praesentium fuga ad
          pariatur delectus animi aliquam labore veritatis beatae ab maxime
          dignissimos error sed blanditiis repellendus totam. Placeat explicabo
          rem et obcaecati illum, quo earum nobis modi iusto quidem officiis!
        </p>
      </section>
      <section className={styles.screen}>
        <h2>Blog</h2>
      </section>
      <section className={styles.screen} id="work-with-me">
        <h2>Work with me</h2>
      </section>
      <section className={styles.screen}>
        <a
          href="https://instagram.com/isabellecmuller"
          rel="noreferer"
          target="_blank">
          <FaInstagram size="2rem" color="white" />
        </a>
        <h2>Find me on Instagram</h2>
        <Instagram />
      </section>
    </MainLayout>
  );
};

export default Home;
