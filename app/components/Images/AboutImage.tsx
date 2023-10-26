import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
// import img from '../../public/about.png';
import img from '../../../public/about.png';

export const AboutImage = () => {
  return (
    <Image
      className={styles.hero}
      src={img}
      alt="Isabelle posing in black"
      width={1290}
      height={1609}
      placeholder="blur"
      priority
      layout="responsive"
    />
  );
};
