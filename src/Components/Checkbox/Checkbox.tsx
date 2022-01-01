import React, { FC } from "react";
import styles from "./Checkbox.module.css";

interface Props{
    index: number;
    name: string;
    text: string;
    changeHandler?: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<Props> = ({index, name, text, changeHandler}) => {
    return <>
        <input type="checkbox" id={name} onChange={changeHandler} className={styles.checkbox}/>
        <label htmlFor={name} className={styles.label}>{text}</label>
    </>
    
    ;
};

export default Checkbox;