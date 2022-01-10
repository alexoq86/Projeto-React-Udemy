import React from 'react';
import Card from "../UI/Card";
import classes from "./Data.module.css"


const Data = (props) => {

    if (props.alunos.length === 0) {
        return (
            <Card className={classes.alunos}><h2>Sem alunos.</h2> </Card>)
    }

    return (
        <Card className={classes.alunos}>
            <ul>
                {props.alunos.map((alunos) => (
                    <li key={alunos.key}>
                        {alunos.nome}, {alunos.idade} anos de idade
                    </li>
                ))}
            </ul>
        </Card>

    );
}

export default Data;