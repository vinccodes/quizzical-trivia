import React from 'react';
import '../styles.css'
import Button from './Button'
const Question = ({question, content, choices, clickedChoice}) =>{

    // randomize choices
    
    

    return(
        <div className="question__container">
            <h3 className="question__title">{question}</h3>
            <div className="question__choice--container">
                <Button 
                    className={
                        choices[0].selected ? 'btn-selected' : ''
                    }
                    id={choices[0].id} 
                    content={choices[0].text} 
                    onClick={()=>{
                        clickedChoice(choices[0].id)
                    }}>

                </Button>
                <Button
                    className={
                        choices[1].selected ? 'btn-selected' : ''
                    }
                    id={choices[1].id} 
                    content={choices[1].text}
                    onClick={()=>{
                        clickedChoice(choices[1].id)
                    }}>
                 </Button>
                <Button  
                    className={
                        choices[2].selected ? 'btn-selected' : ''
                    }
                    id={choices[2].id} 
                    content={choices[2].text}
                    onClick={()=>{
                        clickedChoice(choices[2].id)
                    }}>
                </Button>
                <Button  
                    className={
                        choices[3].selected ? 'btn-selected' : ''
                    }
                    id={choices[3].id} 
                    content={choices[3].text}
                    onClick={()=>{
                        clickedChoice(choices[3].id)
                    }}>
                </Button>
            </div>
        </div>
    )
}

export default Question;