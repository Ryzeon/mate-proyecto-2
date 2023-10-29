import {React, useEffect, useState} from "react";

import Header from "../Header/Header";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Matrix from "../Matrix/Matrix";
import {Graph} from "../Graph/Graph";

import FutureCallback from "../../validations/callback";
import Nav from "../Nav/Nav";
import Dijkstra from "../Dijkstra/Dijkstra";

const Main = () => {
    const [mssgHeader, setMssg] = useState('Selecciona una opción');
    const [btnSelected, setSelected] = useState('');
    const [active, setHeaderActive] = useState('header-active');
    const [inputActive, setInputActive] = useState(false);
    const [n, setN] = useState(0);
    const [numberValid, setNumberValid] = useState(false);
    const [generate, setGenerateMatrix] = useState(0); // 0:nada, 1:random, 2:input
    const [matrix, setMatrix] = useState(false); // true: matriz random, false: matriz input
    const [out_matriz, setOut_matriz] = useState([]);
    const [btn_calculate, setBtnCalculate] = useState(false);
    const [dijkstraSrc, setDijkstraSrc] = useState(0);
    const [dijkstraDst, setDijkstraDst] = useState(0);


    const futureCallback = new FutureCallback();
    const handle_dijkstra = new FutureCallback();

    document.addEventListener('matrixChange', (e) => {
        // if last call was in more than 200 milliseconds ago return
        futureCallback.handle(e.detail.matrix);
        setBtnCalculate(true);
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

        if (btnSelected === 'Calcular distancia minima') {
            console.log(out_matriz)
            handle_dijkstra.handle(dijkstraSrc, dijkstraDst, out_matriz);
        }

    }, [btnSelected, dijkstraDst, dijkstraSrc, matrix]);



    return (
        <>
            <Nav></Nav>
        
            <Header mssgHeader={mssgHeader} btnSelected={btnSelected} setSelected={setSelected} active={active}/>

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
                ((generate === 1 || generate === 2) && numberValid) && <Graph size={n} matrix={out_matriz} FutureCallback={futureCallback} handlejistrackCB={handle_dijkstra}/>
            }
            {
                (btn_calculate && numberValid) && <Dijkstra n={n} setSelected={setSelected} setDijkstraDst={setDijkstraDst} setDijkstraSrc={setDijkstraSrc} handlejistrackCB={handle_dijkstra}  />
            }

        </>
    );
}

export default Main;