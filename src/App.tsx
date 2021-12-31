import { useState } from "react";
import Password from "./Components/Password/Password";

function App() {
  const [password, setPassword] = useState<string>("Ex4mPl3P4ssW0rd");
  return (
    <div className="App">
      <Password text={password}/>
    </div>
  );
}

export default App;
