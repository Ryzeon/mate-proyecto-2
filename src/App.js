import {React, useEffect, useState} from "react";
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import Matrix from "./Components/Matrix/Matrix";
import {Graph} from "./Components/Graph/Graph";
import FutureCallback from "./validations/callback";

const App = () => {

    const [mssgHeader, setMssg] = useState('Selecciona una opción');
    const [btnSelected, setSelected] = useState('');
    const [active, setHeaderActive] = useState('header-active');
    const [inputActive, setInputActive] = useState(false);
    const [n, setN] = useState(0);
    const [numberValid, setNumberValid] = useState(false);
    const [generate, setGenerateMatrix] = useState(0); // 0:nada, 1:random, 2:input
    const [matrix, setMatrix] = useState(false); // true: matriz random, false: matriz input
    const [out_matriz, setOut_matriz] = useState([]);

    const futureCallback = new FutureCallback();

    document.addEventListener('matrixChange', (e) => {
        // if last call was in more than 200 milliseconds ago return
        futureCallback.handle(e.detail.matrix);
    });

    useEffect(() => {
        if (btnSelected !== '') {
            setHeaderActive('header-noactive');
        }

        if (btnSelected === 'Matriz random') {
            setMssg('Ingresa el número de filas y columnas');
            setInputActive(true);
            setMatrix(true);
        }

        if (btnSelected === 'Ingresar matriz') {
            setMssg('Ingresa el número de filas y columnas');
            setInputActive(true);
            setMatrix(false);
        }

        if (btnSelected === 'Generar') {
            (matrix) ? setGenerateMatrix(1) : setGenerateMatrix(2);
        }

    }, [btnSelected, matrix]);


    return (
        <>
            <Header
                mssgHeader={mssgHeader}
                btnSelected={btnSelected}
                setSelected={setSelected}
                active={active}
            />

            {
                (inputActive) ? (
                    <section>
                        <div className="flex-row flex-column input__container">
                            <Input setN={setN} numberValid={numberValid} setNumberValid={setNumberValid}></Input>
                        </div>
                        
                        <div style={{width: 'max-content', margin: '0 auto'}}>
                            <Button
                                mssg="Generar"
                                setSelected={setSelected}
                            />

                        </div>
                    </section>


                ) : <></>
            }


            {
                ((generate === 1 || generate === 2) && numberValid) && <Matrix n={n} random={matrix} matrixOutput={setOut_matriz}/>

            }
            {
                ((generate === 1 || generate === 2) && numberValid) && <Graph size={n} matrix={out_matriz} FutureCallback={futureCallback}/>
            }

        </>
    );
}


export default App;
