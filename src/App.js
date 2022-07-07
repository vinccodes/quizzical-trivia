import React from 'react';
import Intro from './components/Intro';
import Question from './components/Question'
import Answers from './components/Answers';
const App = () => {

    const TRIVIA_URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";

    // track game state
    const [gameWon, setGameWon] = React.useState(true)
    // track game questions
    const [triviaData, setTriviaData] = React.useState([])
    const [questions, setQuestions] = React.useState([])
    const [selectedAnswers, setSelectedAnswers] = React.useState([])

    console.log(triviaData);
    // when start quiz is clicked conditionally render the questions component
    const clickStart = () => {

    }

    // click choice
    const clickedChoice = () => {
        // when user clicks a choice, find the question by id
        // question matches id
        // set its property to be selected: true 

    }
    // Fetch the trivia questions 
    React.useEffect(() => {
        try {
            // make a fetch request to api, once promise resolves set the data state
            const result = fetch(TRIVIA_URL)
                .then(res => res.json())
                .then(data => setTriviaData(data.results))
        }
        catch (err) {
            if (err) {
                console.log(err);
            }
        }
    }, [])

    // map the trivia data into Question JSX objects
    const allQuestions = triviaData.map((item, index) => {
        return (
            <Question
                key={index}
                question={item.question}
                answer={item.correct_answer}
                choices={item.incorrect_answers}
            />
        )
    })

    return (
        <div className="App">
            <Intro />
            {allQuestions}
            <button className="btn-dark">Check answers</button>
        </div>
    )
}

export default App;

