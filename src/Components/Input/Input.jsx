import React from "react";
import {validateNumber} from "../../validations/input";
import './Input.css';

const Input = ({setN, numberValid, setNumberValid}) => {

    const isNumberValid = () => { // Funtion to validate the input number
        const input = document.querySelector('.input_number'); // Se hace un query para obtener el input
        if (validateNumber(input.value)) { // Se valida el input
            setNumberValid(true);
            setN(input.value);
            input.classList.remove('input_error'); // Se remueve la clase de error
        } else {
            setNumberValid(false);
            setN(0);
            input.classList.add('input_error'); // Se agrega la clase de error
        }
    }

    return (
        <div className="input__content flex-row flex-column">
            <label className="label_number" htmlFor="input_number">Número de filas y columnas</label>
            <input type="number" name="input_number" className="input_number" min="0" onChange={isNumberValid}
                   placeholder="0"></input>
            {
                (!numberValid) ? <p className="text_error">Ingresa un número positivo menor a 10</p> : <></>
            }
        </div>
    )
}

export default Input;