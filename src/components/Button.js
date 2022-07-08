import React from 'react';

const Button = (props)=>{
    return(
        <button className="btn" id={props.id}>
            {props.content}
        </button>
    )
}

export default Button;