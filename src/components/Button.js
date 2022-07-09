import React from 'react';

const Button = (props)=>{

    const btnStyles = props.selected ? "btn btn-selected" : "btn";
    return(
        <button 
            className={btnStyles} 
            id={props.id} 
            onClick={()=>{ props.clickedChoice(props.id) }}>
            {props.content}
        </button>
    )
}

export default Button;