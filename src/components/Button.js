import React from 'react';

const Button = (props)=>{

    const btnStyles = props.selected ? "btn btn-selected" : "btn";


    let btnCorrect;
    if (props.correctAnswer === undefined){
        btnCorrect = 'btn';
    }
    else if (props.correctAnswer === true){
        btnCorrect = 'btn btn-correct';
    }
    else if (props.correctAnswer === false){
        btnCorrect = 'btn btn-incorrect';
    }


    return(
        <button 
            className={`${btnStyles} ${props.correctAnswer == true ? 'btn btn-correct': 'btn btn-inccorect'}`} 
            id={props.id} 
            onClick={()=>{ props.clickedChoice(props.id) }}>
            {props.content}
        </button>
    )
}

export default Button;