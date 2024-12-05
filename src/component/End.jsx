import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import '../css/End.css'

export default function End() {
    const location = useLocation();
    const goal = location.state?.goal;
    const navigate = useNavigate()


    const Feedback = () => {
        let message = "";

        if (goal <= 3) {
            message = "Your knowledge isn't good. 😨"
        } else if (goal > 3 && goal <= 9) {
            message = "You have some knowledge, but it is not enough. 😐"
        } else if (goal > 9 && goal <= 14) {
            message = "Your level is intermediate.😍"
        } else if (goal >= 15) {
            message = "You're very smart! 🧠"
        }

        return <p className='message'>{message}</p>;
    };

    const start = () => {
        navigate('/')
    }
    return (
        <>
            <div className="container">
                <div className="quizz__wrrap">
                    {goal === undefined || goal === null ? (
                        <p>No goal provided. Please return to the quiz.</p>
                    ) : (
                        <p className='goals'>Your goal: {goal}</p>
                    )}
                    {Feedback()}
                    <button onClick={start} className='btn btn__user-choice'>Start new!</button>
                </div>

            </div>

        </>
    )
}
