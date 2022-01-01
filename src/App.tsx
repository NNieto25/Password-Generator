import { useState } from "react";
import NumberField from "./Components/NumberField/NumberField";
import Password from "./Components/Password/Password";

function App() {
  const [password, setPassword] = useState<string>("Ex4mPl3P4ssW0rd");
  return (
    <div className="App">
      <NumberField name="length" value={5} changeHandler={() => {}}/>
    </div>
  );
}

export default App;
