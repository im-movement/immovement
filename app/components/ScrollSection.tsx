'use client';
import React, { useEffect } from 'react';

export const ScrollSection: React.FC = () => {
  useEffect(() => {
    let disableScroll = false;
    const scrollContainer = document.querySelector('main');
    const grabScroll = (e: Event) => {
      e.preventDefault();
      console.log(e);
      if (!disableScroll) {
        if (scrollContainer) {
          disableScroll = true;
          if (disableScroll) {
            scrollContainer.scrollLeft += scrollContainer.clientWidth - 40;
            setTimeout(() => {
              disableScroll = false;
            }, 300);
          }
        }
      }
    };
    scrollContainer?.addEventListener('wheel', grabScroll, { passive: false });
    return () => {
      scrollContainer?.removeEventListener('wheel', grabScroll);
    };
  }, []);

  return <></>;
};
