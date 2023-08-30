import React from "react";
import '../../bases.css'
const Button = ({mssg, setSelected, style}) => {
    const toggleSelected = () => setSelected(mssg);
    return (
        <div style={style} className='button' onClick={toggleSelected}>
            {mssg}
        </div>
        
    )
}

export default Button;