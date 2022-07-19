import React from 'react';
import Button from './Button';


const Answer = ({question, choices})=>{
    
    const checkedChoices = choices.map(item=>{
        return(
            <Button 
                key={item.id}
                id={item.id}
                content={item.text}
                correctAnswer={item.correctAnswer}
            />
        )
    })
    return(
        <div className="answer__container">
            <h3 className="answer__title">{question}</h3>
            <div className="answer__choice--container">
                {checkedChoices}
            </div>
        </div>
    )
}

export default Answer;