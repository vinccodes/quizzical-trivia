import React from 'react';

const Question = (props) =>{
    return(
        <div>
            <h3>{props.question}</h3>
            <div>
                <button>{props.answer}</button>
                <button>{props.choices[0]}</button>
                <button>{props.choices[1]}</button>
                <button>{props.choices[2]}</button>
            </div>
        </div>
    )
}

export default Question;