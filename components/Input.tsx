import styles from '@/styles/Input.module.scss'

interface InputProps {
  title: string;
  type?: "text" | "number" | "date" | "time" | "file" | "textarea";
  value: string;
  setValue: (v: string) => void;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({ title, type = "text", value, setValue, required = false }) => {
  
    return (
      <div>
        <label htmlFor={title}>{title}: </label>
        <input onChange={(e) => setValue(e.target.value)} id={title} type={type} value={value} required />
      </div>
    )
};
