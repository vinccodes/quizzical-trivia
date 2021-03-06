import React from 'react';
import '../styles.css'
import Button from './Button'
const Question = ({question, choices, clickedChoice}) =>{

    // TODO: randomize choices
    
    // map the buttons
    const quizButtons = choices.map(choice=>{
        return (
            <Button 
                key={choice.id}
                id={choice.id}
                content={choice.text}
                selected={choice.selected}
                clickedChoice={clickedChoice}
                correctAnswer={choice.correctAnswer}
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