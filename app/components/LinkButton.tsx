import React from 'react';
import styles from '@/styles/Button.module.scss';

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ title, ...props }) => {
  return (
    <a className={styles.button} {...props}>
      {title}
    </a>
  );
};
