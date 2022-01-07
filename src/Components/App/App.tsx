import { FC, useEffect, useState } from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import NumberField from "../NumberField/NumberField";
import Password from "../Password/Password";
import styles from "./App.module.css"

const App: FC = () => {
  
  const [validFlags, setValidFlags] = useState<boolean[]>([true,false,false,false]);
  const [length, setLength] = useState<number>(4);
  const [password, setPassword] = useState<string>("");
  //Ascii codes for lowercases, uppercases, numbers, especial characters
  const characters: number[][] = [[97,123], [65,91], [48,58], [33,48]];
  
  const toggleValidate = (index : number) => {
    let flags = validFlags;
    flags[index] = !flags[index];
    setValidFlags(flags);
    console.log(flags);
  };

  const randomInt = ( max: number) => {
    return Math.floor(Math.random() * (max));
  }
  
  const randomIntMin = (min:number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const updatePassword = () => {
    let asciiCodes = [];
    let pass: string = "";
    for (let index = 0; index < length; index++) {
      let randIndex = randomInt(4);
      while(validFlags[randIndex] !== true){
        randIndex = randomInt(4);
      }
      randIndex = randomIntMin(characters[randIndex][0], characters[randIndex][1]);
      asciiCodes.push(randIndex);
      pass += String.fromCharCode(randIndex);
    }
    setPassword(pass);
    console.log(pass, pass.length);
  }

  useEffect(() => {
    updatePassword();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="App">
      <div className={styles.main_box}>
        <Password text={password}/>
        <div id={styles.group}>
        <NumberField name="length" changeHandler={setLength}/>
        <Checkbox name="uppercases" text="Uppercases" changeHandler={() => toggleValidate(1)}/>
        <Checkbox name="numbers" text="Numbers" changeHandler={() => toggleValidate(2)}/>
        <Checkbox name="special" text="Special Characters" changeHandler={() => toggleValidate(3)}/>
        </div>
        <Button handleClick={updatePassword} text="Generate Password"/>
      </div>
      <span className={styles.author}><a href="https://github.com/NNieto25/" target="_blank" rel="noreferrer" >Made with ♥ by Nestor Nieto</a></span>
    </div>
  );
}

export default App;
