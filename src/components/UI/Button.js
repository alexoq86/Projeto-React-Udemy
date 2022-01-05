import React from "react";

import "./Button.css";

const Button = props => {
    return (
    <button className="button" type={props.type} onClick={props.onCLick}>
       {props.text}
    </button>
    )
}

export default Button;
