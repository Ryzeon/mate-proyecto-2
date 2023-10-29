import React, {Component, useEffect, useState} from "react";
import {generateRandom, matrixInput} from "../../matrix_functions/matrix";
import './Matrix.css';
import {validateMatrix, validateNumber} from "../../validations/input";

const cellCompleted = (matrix_input, setMatrixInput, countFilled, setCountFilled, SetMatrixOutput, matrixChange) => {
    const inputs = document.querySelectorAll('.cell_input');
    inputs.forEach((input) => {
        let newMatrix = [...matrix_input];
        if (!validateNumber(input.value)) {
            input.value = '';
            newMatrix[parseInt(input.id[0])][parseInt(input.id[1])] = 0;
        } else {
            setCountFilled(countFilled + 1);
            newMatrix[parseInt(input.id[0])][parseInt(input.id[1])] = parseInt(input.value);
        }
        setMatrixInput(newMatrix);
        SetMatrixOutput(newMatrix);
        if (validateMatrix(newMatrix.length, newMatrix)) {
            matrixChange(matrix_input);
        }
    });

}

function generateCells(n, random, matrix_rand, matrix_input, setMatrixInput, countFilled, setCountFilled, onMatrixChange, SetMatrixOutput) {
    const handleCell = () => {
        cellCompleted(matrix_input, setMatrixInput, countFilled, setCountFilled, SetMatrixOutput, onMatrixChange)
    }

    const matrix_front = [];
    for (let i = 0; i < n; ++i) {
        const row = [];
        for (let j = 0; j < n; ++j) {
            if(j==0) row.push(<p key={j} style={{paddingRight: '1rem'}}>{i+1}</p>);
            row.push(
                (random) ?
                    <div key={j} className="cell">{matrix_rand[i][j]}</div>
                    :
                    <input
                        key={j}
                        id={i + "" + j}
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

const generateVertix = (n) => {
    const vertix = [];
    for (let i = 0; i < n; ++i) {
        vertix.push(i+1);
    }
    return vertix;
}


const Matrix = ({n, random, matrixOutput}) => {

    const [countFilled, setCountFilled] = useState(0);
    const [matrix_input, setMatrixInput] = useState(matrixInput(n));
    const [matrix_rand, setMatrixRand] = useState(generateRandom(n));

    useEffect(() => {
        if (random) {
            onMatrixChange(matrix_rand);
        }
    });

    function onMatrixChange(matrix) {
        const event = new CustomEvent('matrixChange', {
            detail: {
                matrix: matrix
            }
        });
        document.dispatchEvent(event);
    }

    useEffect(() => {
        onMatrixChange(matrix_input)
    }, [countFilled, matrix_input]);

    useEffect(() => {
        if (random) {
            matrixOutput(matrix_rand);
        }
    },[]);

    return (
        <div className="matrix_container">
            <div className="matrix__content">
                <div className="flex-row">
                    {
                        generateVertix(n).map((vertix) => <p key={vertix} style={{padding: '0px 1rem 0 3rem'}}>{vertix}</p>)
                    }
                </div>
                {
                    generateCells(n, random, matrix_rand, matrix_input, setMatrixInput, countFilled, setCountFilled, onMatrixChange, matrixOutput)
                }
            </div>

            {
                (countFilled >= n * n && !random && !validateMatrix(n, matrix_input)) &&
                <div className="matrix__error">
                    <p>La matriz ingresada no es simétrica</p>
                    {
                        document.querySelectorAll('.cell_input').forEach(input => input.style.border = '1px solid var(--error-color)')
                    }
                </div>
            }

            {
                (countFilled >= n * n && !random && validateMatrix(n, matrix_input)) &&
                document.querySelectorAll('.cell_input')
                    .forEach(input => input.style.border = '1px solid var(--bg-in)')
            }
        </div>


    )
}

export default Matrix;