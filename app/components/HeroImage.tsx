import Image from 'next/image';
import styles from '@/styles/Home.module.scss';

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

export const HeroImage = () => {
  return (
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
  );
};
