import React from 'react';
import Card from "../UI/Card";
import "./Data.css"


const Data = (props) => {

    if (props.alunos.length === 0) {
        return (
        <Card><h2>Sem alunos.</h2> </Card>)
    }

    return (
        <Card>
            <ul>
                {props.alunos.map((alunos) => (
                    <ul className="item-lista" key={alunos.key}>
                        <label className="item-lista-label">Nome</label>
                        <br></br>
                        <label>{alunos.nome}</label>
                        <br></br>
                        <label className="item-lista-label">Idade</label>
                        <br></br> 
                        <label>{alunos.idade}</label>
                    </ul>
                ))}
            </ul>
        </Card>

    );
}

export default Data;