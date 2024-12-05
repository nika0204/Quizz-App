import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import "../css/Quizz.css"

export default function Quizz() {
  const { state } = useLocation()
  const navigate = useNavigate();


  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(1)
  const [goal, setGoal] = useState(0)
  const [error, setError] = useState(false)
  const [userChoice, setUserChoice] = useState('')
  const [hint, setHint] = useState(3)
  const [toggle, setToggle] = useState(false)


  useEffect(() => {
    axios.get(state)
      .then((res) => {
        setQuestions(res.data.questions.slice(1, 21))
      })
      .catch((eror) => {
        console.log(eror)
        setError(!error)
      })
  }, [])

  const answeared = (index) => {
    // console.log(index.target.innerHTML)
    const userAnswer = index.target.innerHTML
    setUserChoice(userAnswer)
  }


  const nextQuestion = () => {
    if (userChoice == questions[currentIndex].answer) {
      setGoal(goal + 1)
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setToggle(false)
    } else {
      finish()
    }
  }
  const finish = () => {
    console.log("Goal before navigating:", goal);
    if (goal === undefined || goal === null) {
      console.error("Goal is undefined or empty!");
      setError(!error)
      return;
    }
    navigate('/end', { state: { goal } });
  }

  const hinting = () => {
    if (hint > 0) {
      setToggle(true)
      setHint(hint - 1)
    }
  }

  return (
    <>
      <div className="container">
        <div className="quizz__wrrap">
          {error ? "error please refresh" :
            <div className="quizz__quizz">
              {questions.length === 0 ? "Please wait. loading questions ...." :
                <div className='quizz__inner'>
                  <div className="quizz__additional">
                    <p>Amount hint: {hint}</p>
                    <p>Number of questions: {currentIndex} / {questions.length}</p>
                  </div>

                  {questions[currentIndex].images?.map(item => <img>{item}</img>)}
                  <h2 className='quizz__question'>{questions[currentIndex].question}</h2>
                  <p>Category Question:{questions[currentIndex].category}</p>
                 <div className="quizz__options">
                 {questions[currentIndex].options?.map((item, index) =>
                    <button className='quizz__option'
                      key={index} onClick={(index) => answeared(index)}>{item}</button>
                  )}
                 </div>
                 
                  <div className="quizz__btn-group">
                    <button onClick={nextQuestion} className='btn '>Next</button>
                    <button className='btn' onClick={hinting} >HINT!</button>
                    <button onClick={finish} className='btn'>Finish</button>
                  </div>
                  <p className="quizz__hint">{toggle ? questions[currentIndex].info : ''}</p>
                  <p className="quizz__message">{hint < 1 ? "Sorry you use all hints!" : ""}</p>
                </div>
              }
            </div>
          }
        </div>

      </div>

    </>
  )
}
