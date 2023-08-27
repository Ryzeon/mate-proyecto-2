import { useState } from "react";
import Header from "./Components/Header/Header";

const App = () => {

  const [mssgHeader, setMssg] = useState('Selecciona una opción');
  const [bttn_rand, setRand] = useState(false);
  const [bttn_input, setBtnInput] = useState(false);

  

  return (
    <>
      <Header mensaje={mssgHeader} setBtnInput={setBtnInput} setRand={setRand}/>
      <button onClick={
        console.log(bttn_rand,bttn_input)
      }>ga</button>
    </>
  );
}

export default App;
