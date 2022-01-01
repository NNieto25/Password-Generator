import { FC } from "react";
import styles from "./Button.module.css";

interface Props{
    text: string;
    handleClick : () => void;
}

const Button: FC<Props> = ({text, handleClick}) => {
    return <button type="button" onClick={handleClick} className={styles.button}>{text}</button>
}

export default Button;