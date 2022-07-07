import React from 'react';
import '../styles.css'
import Button from './Button'
const Question = (props) =>{

    // randomize choices


    return(
        <div className="question__container">
            <h3 className="question__title">{props.question}</h3>
            <div className="question__choice--container">
                <Button  content={props.choices[0].text}></Button>
                <Button  content={props.choices[1].text}></Button>
                <Button  content={props.choices[2].text}></Button>
                <Button  content={props.choices[3].text}></Button>
            </div>
        </div>
    )
}

export default Question;