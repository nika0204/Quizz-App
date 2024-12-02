import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
    } else {
      console.log('you use all hints!')
    }
  }

  return (
    <>
      {error ? "error please refresh" :
        <div className="">
          {questions.length === 0 ? "Please wait. loading questions ...." :
            <div>
              <h3>QUIZZ</h3>
              <p>Amount hint: {hint}</p>
              <p>Number of questions: {currentIndex} / {questions.length}</p>
              <p>Category Question:{questions[currentIndex].category}</p>
              {questions[currentIndex].images?.map(item => <img>{item}</img>)}
              <h2>{questions[currentIndex].question}</h2>
              <button onClick={hinting}>Hint!</button>
              {questions[currentIndex].options?.map((item, index) =>
                <button
                  key={index} onClick={(index) => answeared(index)}>{item}</button>
              )}
              <button onClick={nextQuestion}>Next</button>
              <button onClick={finish}>Finish</button>
              {toggle ? questions[currentIndex].info : ''}
              {hint < 1 ?  "Sorry you use all hints!" :""}
            </div>
          }
        </div>
      }
    </>
  )
}
