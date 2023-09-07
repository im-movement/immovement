import React from 'react';
import { Orbit } from '@uiball/loaders';

import styles from '@/styles/Loading.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.container}>
        <Orbit size={30} speed={1.5} color="white" />
      </div>
    </div>
  );
};
