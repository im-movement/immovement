import React from 'react';
import styles from '@/styles/Input.module.scss'


interface InputProps {
  title: string;
  type?: "text" | "number" | "date" | "time" | "file";
  value: string;
  setValue: (v: string) => void;
}

export const Input: React.FC<InputProps> = ({ title, type = "text", value, setValue }) => {
  
    return (
      <div>
        <label htmlFor={title}>{title}</label>
        <input onChange={(event) => setValue(event.target.value)} id={title} type={type} value={value}></input>
      </div>
    )
};
