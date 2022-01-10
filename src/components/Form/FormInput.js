import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";
import  classes from "./FormInput.module.css"



const FormInput = (props) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState("")

    const nomeChangeHandler = (event) => {
        setName(event.target.value)
    }

    const idadeChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (/^[a-zA-Z]+$/.test(name) && age > 0) {
            const dataForm = {
                key: Math.floor(Math.random() * 10000),
                nome: name,
                idade: age
            }
            props.saveNovoAluno(dataForm);
            setName("");
            setAge("");
        }else{
            setError({
                title: "Erro",
                message: "Dados inválidos"
            });
            setName("");
            setAge("");
        }
    }
    const errorHandler = () => {
        setError(null);
      };

    return (
        <div>
            {error && (<Error tile={error.tile} message={error.message} onConfirm={errorHandler} />)}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label>Nome</label>
                    <input type="text" value={name} onChange={nomeChangeHandler}></input>
                    <label>Idade</label>
                    <input type="number" min="1" max="100" value={age} onChange={idadeChangeHandler}></input>
                    <br /><Button type={"Sumbit"}>Enviar</Button>
                </form>
            </Card>
        </div>
    );
}

export default FormInput;