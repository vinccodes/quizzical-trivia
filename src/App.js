import React from 'react';
import Intro from './components/Intro';
import Question from './components/Question'
import Answers from './components/Answers';
const App = () => {

    const TRIVIA_URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";

    // track game state
    const [gameWon, setGameWon] = React.useState(undefined)
    // track game questions
    const [triviaData, setTriviaData] = React.useState([])
    const [choices, setChoices] = React.useState([])

    console.log(triviaData);
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
    }, [gameWon])

    function generateChoices() {
        // loop through the data

        let idToAssign = 1;
        const answersArr = []
        triviaData.forEach((item, mainIndex) => {
            let answer = {
                id: idToAssign,
                text: item.correct_answer,
                selected: false
            }
            idToAssign++
            answersArr.push(answer)
            // loop through each incorrect answer
            item.incorrect_answers.forEach(choice => {
                let choiceToAdd = {
                    id: idToAssign,
                    text: choice,
                    selected: false
                }
                answersArr.push(choiceToAdd)
                idToAssign++
            })
        })
        return answersArr
    }



    // map the trivia data into Question JSX objects
    const allQuestions = triviaData.map((item, index) => {

        // i need to get a subarray of 4 choices 5 times.


        return (
            <Question
                key={index}
                question={item.question}
                choices={choices.slice(index * 4, index * 4 + 4)}
                clickedChoice={clickedChoice}
            />
        )
    })

    return (
        <div className="App">
            <Intro clickedStart={clickStart} />
            {gameWon === false ? <div className="container">
                {allQuestions}
                <button className="btn-dark">Check answers</button>
            </div> : ''}


        </div>
    )
}

export default App;

