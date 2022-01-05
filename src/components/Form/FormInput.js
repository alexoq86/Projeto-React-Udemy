import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";
import "./FormInput.css"



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
            setError(null);
        } else {
            setError({
                title: "Error",
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
            <Card>
                <form onSubmit={submitHandler} className="nova-pessoa">
                    <label>Nome</label>
                    <input type="text" value={name} onChange={nomeChangeHandler}></input>
                    <label>Idade</label>
                    <input type="number" min="1" max="100" value={age} onChange={idadeChangeHandler}></input>
                    <Button type={"Sumbit"} text={"Enviar"}></Button>
                </form>
            </Card>
        </div>
    );
}

export default FormInput;