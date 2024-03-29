import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
// import { Button } from '@/components/button'

// const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>im movement</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.mainContainer}>
          <Image
            className={styles.hero}
            src="/izzy.jpg"
            alt="Isabelle wearing all white standing under two chevron neon lights; one light is red and one is blue"
            width={1290}
            height={1609}
            layout="responsive"
            // height={37}
            // priority
          />
          <h1 className={styles.heading}>im movement</h1>
          <h2 className={styles.subHeading}>coming soon...</h2>
          {/* <Button title="sign up" onClick={()=>alert('sign up')} /> */}
        </section>
        <section className={styles.social}>
          <a
            href="https://instagram.com/isabellecmuller"
            rel="noreferer"
            target="_blank">
            <FaInstagram size="2rem" color="white" />
          </a>
          {/* <FaTiktok color="white" /> */}
        </section>
      </main>
    </>
  );
};

export default Home;
