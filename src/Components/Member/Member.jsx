import React from "react";
import "./Member.css";

const Member = ({src, name, code, career, link}) => {
    return(
        <div className="member__content">
            <img src={src} className="member__content-img"></img>
            <h2>{name}</h2>
            <div className="member__content-info">
                <p>{code}</p>
                <p>{career}</p>
            </div>
        </div>
    )
}

export default Member;