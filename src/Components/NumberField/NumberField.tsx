import React, { FC, useState } from "react";
import styles from "./NumberField.module.css";

interface Props{
    name : string;
    changeHandler : (length: number) => void;
}

const NumberField: FC<Props> = ({name, changeHandler}) => {
    const min: number = 4;
    const max: number = 32;
    const [length, setLength] = useState<number>(min);

    const validate = (event: React.FormEvent<HTMLInputElement>) => {
        const currentValue = parseInt(event.currentTarget.value);
        let correct: number;
        if(isNaN(currentValue) ||  currentValue < min){
            correct = min;
        }
        else if(currentValue > max){
            correct = max;
        }
        else{
            correct = currentValue;
        }
        setLength(correct);
        changeHandler(correct);
    }

    return <>
        <input type="number" name={name} value={length} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setLength(parseInt(event.target.value))}} className={styles.number_input}  min="4" max="32" onBlur={validate}/>
    </>;
};

export default NumberField;