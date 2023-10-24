import React from "react";
import Button from "../Button/Button";
import './Dijkstra.css';
import '../Input/Input.css'

const Dijkstra = ({n, setSelected}) => {
    let allright = Array(2).fill(false);
    const isNumberValid = () => {
        const inputs = document.querySelectorAll('.input_number');
        inputs.forEach((input, i) => {
            const value = parseInt(input.value);
            if (value >= 1 && value <= n) {
                input.classList.remove('input_error');
                allright[i] = true;
            } else {
                input.classList.add('input_error');
            }
        })
    }



    return (
        <div className="dijkstra">
            <div className="dijkstra__content">

                <h2>Algoritmo de Dijkstra</h2>
                <p>Calcula la distancia minima desde un vértice origen a un vértice destino</p>
                <div className="inputs">
                    <input type="number" name="origen" className="input_number" id="input_dijkstra" min="0" onChange={isNumberValid}
                    placeholder="Vértice origen"></input>
                    <input type="number" name="destino" className="input_number" id="input_dijkstra" min="0" onChange={isNumberValid}
                    placeholder="Vértice destino"></input>
                </div>

                <div style={{width:'100%', display:'flex', justifyContent: 'center', padding: '3rem 0'}}><Button mssg="Calcular distancia minima" setSelected={setSelected}/></div>
                

            </div>
        </div>
    )
}

export default Dijkstra;