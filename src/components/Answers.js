import React from 'react';
import Button from './Button';


const Answers = ({choices, clickedChoice})=>{

    // map the buttons
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
        <div className="answer__container">
            <h3 className="question__title">{question}</h3>
            <div className="question__choice--container">
                {quizButtons}
            </div>
            <div>
                <p>You scored correct answers</p>
                <button>Play again</button>
            </div>
        </div>
    )
}

export default Answers;