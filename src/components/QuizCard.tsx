import React, { useState } from 'react';
import './QuizCard.css'; // Import the CSS file for styling

// Define a type for the props
type QuizCardProps = {
    question: string;
    options: string[];
    onAnswerSubmit: (answer: string | null) => void;
};

const QuizCard: React.FC<QuizCardProps> = ({ question, options, onAnswerSubmit }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAnswerSubmit(selectedOption);
    };

    return (
        <div className="quiz-card">
            <h2>{question}</h2>
            <form onSubmit={handleSubmit}>
                {options.map((option, index) => (
                    <div key={index} className="option">
                        <input
                            type="radio"
                            id={`option_${index}`}
                            name="option"
                            value={option}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`option_${index}`}>{option}</label>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default QuizCard;
