import React from "react";
import { generateRandom } from "../../matrix_functions/matrix_random";
import './Matrix.css';

function generateCells(n, random) {
    const matrix = ((random)? generateRandom(n) : []); 


    const matrix_front = [];
  
    for (let i = 0; i < n; ++i) {
        const row = [];
        for(let j = 0; j < n; ++j) {
            row.push(<div key={j} className="cell">{matrix[i][j]}</div>);
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