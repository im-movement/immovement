import styles from '@/styles/Home.module.scss';

import { MainLayout } from './components/MainLayout';
import { HeroImage } from './components/Images/HeroImage';
import { EventsImage } from './components/Images/EventsImage';
import { LinkButton } from './components/LinkButton';
import { Instagram } from './components/Instagram';
import { AboutImage } from './components/Images/AboutImage';

const Home = () => {
  return (
    <MainLayout>
      <section className={styles.heroSection}>
        <HeroImage />
        <h1 className={styles.heading}>IMMOVEMENT</h1>
      </section>
      <section className={styles.section}>
        <div className={styles.card}>
          <h2>Events</h2>
          <p>
            Join us to experience the energy of live, in-person events,
            including dance classes, workshops, and performances.{' '}
          </p>
          <LinkButton title="Sign up today!" href="/events" />
          <EventsImage />
        </div>
      </section>
      <section className={styles.section} id="about">
        <h2>About</h2>
        <AboutImage />
        <p>
          Isabelle is a professional dancer, choreographer, and instructor who’s
          been living her dream on stages worldwide for nearly two decades. From
          performing at the Super Bowl XLV halftime show to co-directing a
          dynamic Dallas-based Latin dance company, she’s all about bringing
          energy and creativity to every project. Known for her bold
          choreography and high standards, Isabelle loves mentoring dancers to
          step out of their comfort zones and shine. Whether she’s performing,
          teaching, or creating, she’s always moving to the rhythm of her
          passion for dance.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Blog</h2>
      </section>
      <section className={styles.section} id="work-with-me">
        <h2>Work with me</h2>
      </section>
      {/* <section className={styles.section}> */}
      {/* <div className={styles.card}> */}
      {/* <h2>Follow me on Instagram</h2> */}
      <Instagram />
      {/* </div> */}
      {/* </section> */}
    </MainLayout>
  );
};

export default Home;
