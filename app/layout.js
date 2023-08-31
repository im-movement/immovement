'use client';
import { useEffect } from 'react';
import '../styles/globals.css';
import { AuthContextProvider } from '@/context/AuthContext';
import { useIsIOS } from './components/useIsIOS';

export default function RootLayout({ children }) {
  const isIOS = useIsIOS();

  if (isIOS) {
    //account for iOS status bar
    document.documentElement.style.setProperty(
      '--app-height',
      `${window.innerHeight}px`,
    );
    document.documentElement.style.setProperty('--header-padding', '1rem');
  }

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
