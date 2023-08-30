import { React, useEffect, useState } from "react";
import Header from "./Components/Header/Header";

const App = () => {

  const [mssgHeader, setMssg] = useState('Selecciona una opción');
  const [btnSelected, setSelected] = useState('');
  const [active, setHeaderActive] = useState('header-active');

  useEffect(()=>{
    if(btnSelected !== '') {
      setHeaderActive('header-noactive');
    }

    if(btnSelected === 'Matriz random') {
      setMssg('Ingresa el número de filas y columnas');
    }

    if(btnSelected === 'Ingresar matriz') {
      console.log('mama');
    }

  }, [btnSelected]);

  
  return (
    <>
      <Header 
        mssgHeader={mssgHeader} 
        setSelected={setSelected}
        active={active} 
        />
    </>
  );
}






export default App;
