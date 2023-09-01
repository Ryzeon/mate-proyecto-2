import React, { useEffect, useState } from "react";
import { generateRandom, matrixInput } from "../../matrix_functions/matrix";
import './Matrix.css';
import { validateMatrix, validateNumber } from "../../validations/input";

const cellCompleted = (n, matrix_input, setMatrixInput, countFilled, setCountFilled) => {
    const inputs = document.querySelectorAll('.cell_input');
    inputs.forEach((input) => {
        let newMatrix = [...matrix_input];
        if(!validateNumber(input.value)) {
            input.value = '';
            // arreglar validacion del contador > n!???
            newMatrix[parseInt(input.id[0])][parseInt(input.id[1])] = 0;
        }
        else {
            setCountFilled(countFilled+1);
            newMatrix[parseInt(input.id[0])][parseInt(input.id[1])] = parseInt(input.value);
        }
        setMatrixInput(newMatrix);    

    });
    
}

function generateCells(n, random, matrix_rand, matrix_input, setMatrixInput, countFilled, setCountFilled) {
    const handleCell = () => {
        cellCompleted(n, matrix_input, setMatrixInput, countFilled, setCountFilled)
    }

    const matrix_front = [];

  
    for (let i = 0; i < n; ++i) {
        const row = [];
        for(let j = 0; j < n; ++j) {
            row.push(
                (random)?
                    <div key={j} className="cell">{matrix_rand[i][j]}</div>
                    :
                    <input 
                        key={j}
                        id={i+""+j}
                        className="cell cell_input"
                        type="number"
                        placeholder="0"
                        onChange={handleCell}
                    />
            );
        }
        matrix_front.push(<div key={i} className="flex-row">{row}</div>);
    }

    return matrix_front;
}

const Matrix = ({n, random}) => {
    
    const [countFilled, setCountFilled] = useState(0);
    const [matrix_input, setMatrixInput] = useState(matrixInput(n));
    const matrix_rand = generateRandom(n);
    
    useEffect(()=> {
        console.log(countFilled);
        console.log(matrix_input);
    }, [countFilled]);

    return (
        <div className="matrix_container">
            <div className="matrix__content">
                {
                    generateCells(n, random, matrix_rand, matrix_input, setMatrixInput, countFilled, setCountFilled)
                }
            </div>

            {
                (countFilled === n*n) && <button>Calcular</button>
            }
        </div>

        
    )
}

export default Matrix;