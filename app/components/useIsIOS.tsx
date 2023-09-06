import { useEffect, useState } from 'react';

export const useIsIOS = (): boolean => {
  const [isIOSSafari, setIsIOSSafari] = useState(false);

  useEffect(() => {
    // const doc = document.documentElement;
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    setIsIOSSafari(iOSSafari);
  }, []);
  return isIOSSafari;
};
