import React, { FC } from "react";
import styles from "./Checkbox.module.css";

interface Props{
    name: string;
    text: string;
    changeHandler?: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<Props> = ({name, text, changeHandler}) => {
    return <div>
        <input type="checkbox" id={name} onChange={changeHandler} className={styles.checkbox}/>
        <label htmlFor={name} className={styles.label}>{text}</label>
    </div>
    
    ;
};

export default Checkbox;