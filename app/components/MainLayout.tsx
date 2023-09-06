import Head from 'next/head';
import { Header } from './Header';

import styles from '@/styles/Home.module.scss';

interface MainLayoutProps {
  title?: string;
  children?: React.ReactNode;
  horizontal?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  const {
    title = 'Sign up for dance classes in DFW Texas',
    children,
    horizontal = false,
  } = props;

  return (
    <>
      <Head>
        <title>IM Movement</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="transparent" />
      </Head>
      <Header />
      <main className={horizontal ? styles.mainHorizontal : styles.main}>
        {children}
      </main>
    </>
  );
};
