import React from 'react';
import Button from './Button';

const Intro = (props)=>{

    return(
        <div>
            <h1>Quizzical</h1>
            <p>A trivia game of random questions</p>
            <button className="btn-dark" onClick={props.clickedStart}>Start quiz</button>
        </div>
    )
}

export default Intro;