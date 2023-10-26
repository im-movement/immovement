import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import img from '../../../public/events.png';

export const EventsImage = () => {
  return (
    <Image
      className={styles.eventsImage}
      src={img}
      alt="Isabelle wearing red dress in class"
      // width={1290}
      // height={1609}
      placeholder="blur"
      priority
      layout="responsive"
    />
  );
};
