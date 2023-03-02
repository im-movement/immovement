import React from 'react';
import styles from '@/styles/Button.module.css'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  // showIcon: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, 
  // showIcon,
   ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {title}
      {/* {showIcon && <Icon/>} */}
    </button>
  );
};