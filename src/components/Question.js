import React from 'react';
import '../styles.css'
const Question = (props) =>{
    return(
        <div className="question__container">
            <h3 className="question__title">{props.question}</h3>
            <div className="question__choice--container">
                <button className="btn">{props.answer}</button>
                <button className="btn">{props.choices[0]}</button>
                <button className="btn">{props.choices[1]}</button>
                <button className="btn">{props.choices[2]}</button>
            </div>
        </div>
    )
}

export default Question;