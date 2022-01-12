import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Error from "../UI/Error";
import classes from "./FormInput.module.css"
import Wrapper from "../Helpers/Wrapper";



const FormInput = (props) => {
   
    const userNameRef = useRef();
    const userAgeRef = useRef();

    const [error, setError] = useState("")


    const submitHandler = (event) => {
        event.preventDefault();
        const userName = userNameRef.current.value;
        const userAge = userAgeRef.current.value

        if (/^[a-zA-Z]+$/.test(userName) && userAge > 0) {
            const dataForm = {
                key: Math.floor(Math.random() * 10000),
                nome: userName,
                idade: userAge
            }
            props.saveNovoAluno(dataForm);
            userNameRef.current.value = "";
            userAgeRef.current.value = ""
        } else {
            setError({
                title: "Erro",
                message: "Dados inválidos"
            });
            userNameRef.current.value = "";
            userAgeRef.current.value = ""
        }
    }
    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (<Error tile={error.tile} message={error.message} onConfirm={errorHandler} />)}
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label>Nome</label>
                    <input type="text" ref={userNameRef}></input>
                    <label>Idade</label>
                    <input type="number" min="1" max="100" ref={userAgeRef}></input>
                    <br /><Button type={"Sumbit"}>Enviar</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default FormInput;