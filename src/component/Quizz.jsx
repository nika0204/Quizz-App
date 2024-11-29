import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Quizz() {
  const { state } = useLocation()

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [goal, setGoal] = useState(0)
  const [error, setError] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [userChoice, setUserChoice] = useState('')

  useEffect(() => {
    axios.get(state)
      .then((res) => {
        setQuestions(res.data.questions)
        console.log(res.data.questions)
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
      console.log('corect answer')
      setGoal(goal + 1)
    } else {
      console.log("incorect answear")
    }


    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      console.log('finish quizz')
    }


  }


  console.log(goal)
  const finish = () => {
    console.log('rezult')
  }




  console.log(goal)

  return (
    <>
      {error ? "error please refresh" :
        <div className="">
          {questions.length === 0 ? "Please wait. loading questions ...." :
            <div>
              <h3>QUIZZ</h3>
              <p>Category Question:{questions[currentIndex].category}</p>
              {questions[currentIndex].images?.map(item => <img>{item}</img>)}
              <h2>{questions[currentIndex].info}</h2>
              {questions[currentIndex].options?.map((item, index) =>
                <button
                  key={index} onClick={(index) => answeared(index)}>{item}</button>
              )}
              <button onClick={nextQuestion}>Next</button>
              <button onClick={finish}>Finish</button>
            </div>
          }
        </div>
      }


    </>
  )
}
