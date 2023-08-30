import React, { useEffect, useState } from "react";
import { validateNumber } from "../../validations/input";
import './Input.css';

const Input = ({setN, numberValid, setNumberValid}) => {

    const isNumberValid = () => {
        const input = document.querySelector('.input_number');
        if(validateNumber(input.value)) {
            setNumberValid(true);
            setN(input.value);
            input.classList.remove('input_error');
        }
        else {
            setNumberValid(false);
            setN(0);
            input.classList.add('input_error');
        }
    }

    return (
        <div className="input__content flex-row flex-column">
            <label className="label_number" htmlFor="input_number">Número de filas y columnas</label>
            <input type="number" name="input_number" className="input_number" min="0" onChange={isNumberValid} placeholder="3"></input>
            {
                (!numberValid)? <p className="text_error">Ingresa un número positivo menor a 10</p> : <></>
            }
        </div>
    )
}

export default Input;