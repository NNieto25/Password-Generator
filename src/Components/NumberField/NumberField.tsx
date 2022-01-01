import { FC } from "react";
import styles from "./NumberField.module.css";

interface Props{
    value: number;
    name : string;
    changeHandler : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberField: FC<Props> = ({ value, name, changeHandler}) => {
    return <>
        <input type="number" name={name} value={value} onChange={changeHandler} className={styles.number_input} />
    </>;
};

export default NumberField;