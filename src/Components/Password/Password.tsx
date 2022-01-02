import React, { FC } from "react";
import styles from './Password.module.css';

interface Props{
    text: string;
}

const Password: FC<Props> = ({text}) => {
    const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const text = event.currentTarget.innerText;
        if(text.length > 0){
            navigator.clipboard.writeText(text);
            alert("Copied to clipboard!");
        }else{
            alert("generate a password.");
        }
    };
    return <div id={styles.password_display} onClick={onClickHandler}>
        <p>{text}</p>
    </div>
}

export default Password;