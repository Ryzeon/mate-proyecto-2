import { React, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Matrix from "./Components/Matrix/Matrix";

const App = () => {

  const [mssgHeader, setMssg] = useState('Selecciona una opción');
  const [btnSelected, setSelected] = useState('');
  const [active, setHeaderActive] = useState('header-active');
  const [inputActive, setInputActive] = useState(false);
  const [n, setN] = useState(0);
  const [numberValid, setNumberValid] = useState(false);
  const [generate, setGenerateMatrix] = useState(0); // 0:nada, 1:random, 2:input
  const [matrix, setMatrix] = useState(false); // true: matriz random, false: matriz input

  useEffect(()=>{
    if(btnSelected !== '') {
      setHeaderActive('header-noactive');
    }

    if(btnSelected === 'Matriz random') {
      setMssg('Ingresa el número de filas y columnas');
      setInputActive(true);
      setMatrix(true);
    }

    if(btnSelected === 'Ingresar matriz') {
      setMssg('Ingresa el número de filas y columnas');
      setInputActive(true);
      setMatrix(false);
    }

    if(btnSelected === 'Generar') {
      (matrix)? setGenerateMatrix(1) : setGenerateMatrix(2);
    }

  }, [btnSelected]);

  
  return (
    <>
      <Header 
        mssgHeader={mssgHeader}
        btnSelected={btnSelected} 
        setSelected={setSelected}
        active={active} 
        />

      {
        (inputActive)? (
          <section>
            <div className="flex-row flex-column input__container">
              <Input setN={setN} numberValid={numberValid} setNumberValid={setNumberValid}></Input>
            </div>
            <Button 
              mssg="Generar" 
              setSelected={setSelected} 
              style={{width: '15%', margin: '0 auto', textAlign: 'center'}}
            />
          </section>
          

        ) : <></>
      }


      {
        (generate === 1 && numberValid) && <Matrix n={n} random={true}/>
      }



    </>
  );
}






export default App;
