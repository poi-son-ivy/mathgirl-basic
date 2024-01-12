import React from 'react';
import QuizCard from './components/QuizCard'; // Adjust the import path based on your file structure

const App = () => {
    // Example question and options
    const question = "Mathgirl, is 42 a prime number?";
    const options = ["Yes", "No"];

    // Handler for when an answer is submitted
    const handleAnswerSubmit = (answer) => {
        console.log(`Answer submitted: ${answer}`);
        // You can add more logic here to handle the answer
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Mathgirl</h1>
            </header>
            <main>
                <QuizCard
                    question={question}
                    options={options}
                    onAnswerSubmit={handleAnswerSubmit}
                />
            </main>
        </div>
    );
};

export default App;
