import React from 'react';
import Intro from './components/Intro';
import Question from './components/Question'
import Answer from './components/Answer';
import Button from './components/Button';
const App = () => {

    const TRIVIA_URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";

    // track game state
    const [gameWon, setGameWon] = React.useState(null)
    // track game questions
    const [triviaData, setTriviaData] = React.useState([])
    const [choices, setChoices] = React.useState([])

    // Fetch the trivia questions 
    React.useEffect(() => {
        try {
            // make a fetch request to api, once promise resolves set the data state
            const result = fetch(TRIVIA_URL)
                .then(res => res.json())
                .then(data => {
                    setTriviaData(data.results)
                })
        }
        catch (err) {
            if (err) {
                console.log(err);
            }
        }
    }, [])

    console.log('trivia data', triviaData);
    console.log('choices', choices)
    // when start quiz is clicked conditionally render the questions component
    const clickStart = () => {
        setChoices(generateChoices())
        setGameWon(false)
    }

    const clickedChoice = (id) => {
        // update the choices state when user clicks on a quiz choice
        setChoices(prevChoices => {
            // return a new copy of choices, 
            // update the selected property if clicked id matches
            // set it to be the new state
            const updatedChoices = prevChoices.map(choice => {
                if (choice.id == id) {
                    const newChoice = {
                        ...choice,
                        selected: !choice.selected
                    }
                    return newChoice;
                }
                return choice;
            })
            return updatedChoices;
        })
    }

    function generateChoices() {
        // set thes starting id to be 1
        let idToAssign = 1;
        const answersArr = []

        // iterate through trivia data
        triviaData.forEach((item, mainIndex) => {
            let answer = {
                id: idToAssign,
                text: item.correct_answer,
                selected: false,
                correctAnswer: null
            }
            idToAssign++
            answersArr.push(answer)
            // loop through each incorrect answer
            item.incorrect_answers.forEach(choice => {
                let choiceToAdd = {
                    id: idToAssign,
                    text: choice,
                    selected: false,
                    correctAnswer: null
                }
                answersArr.push(choiceToAdd)
                idToAssign++
            })
        })
        return answersArr
    }

    // function fires when Check Answers Button clicked
    const checkAnswers = () => {

        const checkedChoices = []

        for (let i = 0; i < 5; i++) {
            const choicesToCheck = choices.slice(i * 4, i * 4 + 4)
            const currentQuestion = triviaData[i]
            for (let j = 0; j < choicesToCheck.length; j++) {
                // don't change non-selected chocies
                if (!choicesToCheck[j].selected) {
                    checkedChoices.push(choicesToCheck[j])

                }
                // user selects choice, check if it matches correct_answer
                if (choicesToCheck[j].selected) {
                    if (choicesToCheck[j].text === currentQuestion.correct_answer) {
                        console.log('choice match', choicesToCheck[j].text)
                        checkedChoices.push({
                            ...choicesToCheck[j],
                            correctAnswer: true
                        })

                    }
                    else {
                        checkedChoices.push({
                            ...choicesToCheck[j],
                            correctAnswer: false
                        })
                    }
                }
            }

        }
        //console.log('checked chocies', checkedChoices)

        setChoices(checkedChoices);
        setGameWon(true)
    }

    // map the trivia data into Question JSX objects
    const allQuestions = triviaData.map((item, index) => {

        return (
            <Question
                key={index}
                question={item.question}
                choices={choices.slice(index * 4, index * 4 + 4)}
                clickedChoice={clickedChoice}
            />
        )
    })

    const allAnswers = triviaData.map((item, index) => {
        return (
            <Answer
                key={index}
                question={item.question}
                choices={choices.slice(index * 4, index * 4 + 4)}
            />
        )
    })



    return (
        <div className="App">
            <Intro clickedStart={clickStart} />
            {gameWon === false ? <div className="container">
                {allQuestions}
                <button className="btn-dark" onClick={checkAnswers}>Check answers</button>

            </div> : ''}
            {gameWon === true ? <div className="container">
                {allAnswers}
            </div> : ''
            }

        </div>
    )
}

export default App;

