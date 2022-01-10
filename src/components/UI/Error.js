import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css"

const Error = props => {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm} />
            <Card className={classes.modal}>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Fechar</Button>
                </footer>
            </Card>
        </div>
    );
};

export default Error;
