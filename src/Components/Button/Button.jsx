import React from "react";
import '../../bases.css'
const Button = ({mssg, setSelected}) => {
    const toggleSelected = () => setSelected(mssg);
    return (
        <div className='button' onClick={toggleSelected}>
            {mssg}
        </div>
        
    )
}

export default Button;