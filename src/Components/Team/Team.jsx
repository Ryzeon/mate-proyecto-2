import React from "react";
import Member from "../Member/Member";
import "./Team.css";

const Team = () => {

    const members = [
        {
            src: "https://avatars.githubusercontent.com/u/121122843?s=400&v=4",
            name: "Arian Rodriguez",
            code: "U202212096",
            career: "Ingeniería de Software"
        },
        {
            src: "https://avatars.githubusercontent.com/u/60982533?v=4",
            name: "Alex Avila",
            code: "U20221a322",
            career: "Ingeniería de Software"
        },
        {
            src: "https://avatars.githubusercontent.com/u/55036994?v=4",
            name: "Sebastian Ramirez",
            code: "U202211894",
            career: "Ingeniería de Software"
        },
        {
            src: "https://avatars.githubusercontent.com/u/55036994?v=4",
            name: "Nicolas Esteban",
            code: "U202217485",
            career: "Ingeniería de Software"
        },
        {
            src: "https://avatars.githubusercontent.com/u/55036994?v=4",
            name: "Diego Gutierrez",
            code: "U202217814",
            career: "Ingeniería de Sistemas"
        }
    ];

    return(
        <div className="team__container flex-row flex-column">
            <div className="team__content">
                <h1>Integrantes</h1>
                <div className="team__content-members flex-row">

                    {
                        members.map((member) => <Member src={member.src} name={member.name} code={member.code} career={member.career}></Member>)
                    }

                </div>
            </div>
        </div>
    );
}

export default Team;