import React, { useEffect, useState } from "react";
import { validateNumber } from "../../validations/input";
import './Input.css';

const Input = () => {
    const [numberValid, setNumberValid] = useState(true);

    const isNumberValid = () => {
        const input = document.querySelector('.input_number');
        if(validateNumber(input.value)) {
            setNumberValid(true);
            input.classList.remove('input_error');
        }
        else {
            setNumberValid(false);
            input.classList.add('input_error');
        }
    }

    return (
        <div className="input__content flex-row flex-column">
            <label className="label_number" htmlFor="input_number">Número de filas y columnas</label>
            <input type="number" name="input_number" className="input_number" min="0" onChange={isNumberValid}></input>
            {
                (!numberValid)? <p className="text_error">Ingresa un número positivo</p> : <></>
            }
        </div>
    )
}

export default Input;