import React from "react";
import { generateRandom, matrixInput } from "../../matrix_functions/matrix_random";
import './Matrix.css';
import { validateNumber } from "../../validations/input";

const cellCompleted = () => {
    const inputs = document.querySelectorAll('.cell_input');
    inputs.forEach((input) => {
        if(!validateNumber(input.value)) input.value = '';
    });
    
}

function generateCells(n, random) {

    const matrix = ((random)? generateRandom(n) : matrixInput(n)); 
    const matrix_front = [];
  
    for (let i = 0; i < n; ++i) {
        const row = [];
        for(let j = 0; j < n; ++j) {
            row.push(
                (random)?
                    <div key={j} className="cell">{matrix[i][j]}</div>
                    :
                    <input 
                        key={j}
                        className="cell cell_input"
                        type="number"
                        placeholder="0"
                        onChange={cellCompleted}
                    />
            );
        }
        matrix_front.push(<div key={i} className="flex-row">{row}</div>);
    }

    return matrix_front;
}

const Matrix = ({n, random}) => {
    return (
        <div className="matrix_container">
            <div className="matrix__content">
                {
                    generateCells(n, random)
                }
            </div>
        </div>
    )
}

export default Matrix;