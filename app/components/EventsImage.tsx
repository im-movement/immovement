import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import events from '../../public/events.png';

export const EventsImage = () => {
  return (
    <Image
      className={styles.hero}
      src={events}
      alt="Isabelle wearing all white standing under two chevron neon lights; one light is red and one is blue"
      width={1290}
      height={1609}
      placeholder="blur"
      priority
      layout="responsive"
    />
  );
};
