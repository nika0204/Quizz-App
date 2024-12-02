import React from 'react'
import { useLocation } from 'react-router-dom';


export default function End() {
    const location = useLocation();
    const goal = location.state?.goal;

    const Feedback = () => {
        let message = "";
    
        if (goal <= 3) {
            message = "Your knowledge isn't good."
        } else if (goal > 3 && goal <= 9) {
            message = "You have some knowledge, but it is not enough."
        } else if (goal > 9 && goal <= 14) {
            message = "Your level is intermediate."
        } else if (goal >= 15) {
            message = "You're very smart!"
        }
    
        return <p>{message}</p>;
    };
    

    return (
        <>
            <div>End page</div>

            <div>Score:</div>
            {goal === undefined || goal === null ? (
                <p>No goal provided. Please return to the quiz.</p>
            ) : (
                <p>Your goal: {goal}</p>

            )}
            {Feedback()}
        </>
    )
}
