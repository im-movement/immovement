import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import img from '../../../public/izzy.jpg';

export const HeroImage = () => {
  return (
    <Image
      className={styles.hero}
      src={img}
      alt="Isabelle wearing all white standing under two chevron neon lights; one light is red and one is blue"
      // width={1290}
      // height={1609}
      placeholder="blur"
      priority={true}
      layout="responsive"
    />
  );
};
