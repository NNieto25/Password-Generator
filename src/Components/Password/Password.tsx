import { FC } from "react";
import styles from './Password.module.css';

interface Props{
    text: string;
}

const Password: FC<Props> = ({text}) => {
    return <div id={styles.password_display}>
        <p>{text}</p>
    </div>
}

export default Password;