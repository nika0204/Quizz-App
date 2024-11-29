import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import Quizz from './component/Quizz.jsx'



function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<Quizz />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
