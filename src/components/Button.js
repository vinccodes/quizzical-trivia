import React from 'react';

const Button = (props)=>{

    const btnStyles = props.selected ? "btn btn-selected" : "btn";

    // apply button styles after checkAnswer() executes
    let correctAnswer
    if (props.correctAnswer === null) {
        correctAnswer = ""
    }
    if (props.correctAnswer) {
        correctAnswer = "btn-correct"
    }
    if (props.correctAnswer === false) {
        correctAnswer = "btn-inccorect"
    }
    

    return(
        <button 
            className={ `${correctAnswer} ${btnStyles} `} 
            id={props.id} 
            onClick={()=>{ props.clickedChoice(props.id) }}>
            {props.content}
        </button>
    )
}

export default Button;