import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Home() {

    const navigate = useNavigate()
    const [URL, setURL] = useState('https://eaxeli.com/api/v1/questions/quiz?')
    const userChoiseCategory = (e) => {
        if (e.target.value != 'any') {
            setURL(URL + `categorySlug=${e.target.value}`)
        }
    }

    const userChoiseDiff = (e) => {
        if (e.target.value != 'any') {
            setURL(URL + `&difficulty=${e.target.value}`)
        }
    }

    const userChoiseType = (e) => {
        if (e.target.value != 'any') {
            setURL(URL + `&type=${e.target.value}`)
        }
    }
    const handleClick = () => {
        console.log(URL)
        navigate('/quizz', { state: URL })
    }
    return (
        <>
            <div className="container">
                <label htmlFor="category">Choose Category</label>

                <select name="trivia_category" className="form-control" id='category' onChange={(e) => userChoiseCategory(e)} >
                    <option value="any">Any Category</option>
                    <option value="general_knowledge">General Knowledge</option>
                    <option value="tourism-and-culture">Tourism And Culture</option>
                    <option value="history">History</option>
                    <option value="animals">Animals</option>
                    <option value="tv-shows">TV Shows</option>
                    <option value="art-and-literature">Art and Liturature</option>
                    <option value="myths-and-legends"> Myths and legends </option>
                    <option value="food-and-drink">Food and Drink</option>
                    <option value="sports">Sports</option>
                    <option value="quotes">Quotes</option>
                    <option value="business-and-technology">business and technology</option>
                    <option value="geography">Geography</option>
                    <option value="notable-names">Notable Names</option>
                    <option value="music"> Music</option>
                    <option value="the-bible">The BIBLE</option>
                    <option value="religion">Religion</option>
                    <option value="science">Science</option>
                    <option value="films">Films</option>
                </select>

                <label htmlFor="difficult">Choose difficult</label>
                <select name="trivia_difficulty" className="form-control" id='difficult' onChange={(e) => userChoiseDiff(e)}>
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label htmlFor="type">Choose Type Questions</label>
                <select name="trivia_type" className="form-control" id='type' onChange={(e) => userChoiseType(e)}>
                    <option value="any">Any Type</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True / False</option>
                </select>
                <button onClick={handleClick}>Ok</button>
            </div>
        </>
    )
}
