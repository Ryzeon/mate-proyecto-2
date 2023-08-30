import { React, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";

const App = () => {

  const [mssgHeader, setMssg] = useState('Selecciona una opción');
  const [btnSelected, setSelected] = useState('');
  const [active, setHeaderActive] = useState('header-active');
  const [inputActive, setInputActive] = useState(false);

  useEffect(()=>{
    if(btnSelected !== '') {
      setHeaderActive('header-noactive');
    }

    if(btnSelected === 'Matriz random') {
      setMssg('Ingresa el número de filas y columnas');
      setInputActive(true);
    }

    if(btnSelected === 'Ingresar matriz') {
      setMssg('Ingresa el número de filas y columnas');
      setInputActive(true);
    }

    if(btnSelected === 'Generar') {
      console.log(' ma ma ');
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
              <Input></Input>
            </div>
            <Button mssg="Generar" setSelected={setSelected} style={{width: '15%', margin: '0 auto', textAlign: 'center'}}/>
          </section>
          

        ) : <></>
      }



    </>
  );
}






export default App;
