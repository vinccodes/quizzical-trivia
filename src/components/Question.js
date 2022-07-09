import React from 'react';
import '../styles.css'
import Button from './Button'
const Question = ({question, content, choices, clickedChoice}) =>{

    // randomize choices
    
    // map the buttons

    const quizButtons = choices.map(choice=>{
        return (
            <Button 
                key={choice.id}
                className={choice.selected ? 'btn-selected' : ''}
                id={choice.id}
                content={choice.text}
                selected={choice.selected}
                clickedChoice={clickedChoice}
            />
        )
    })

    return(
        <div className="question__container">
            <h3 className="question__title">{question}</h3>
            <div className="question__choice--container">
                {quizButtons}
            </div>
        </div>
    )
}

export default Question;