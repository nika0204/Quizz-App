
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/Home'
import Quizz from './component/Quizz.jsx'
import End from './component/End.jsx';

import './css/App.css'
import './css/Normalize.css'


function App() {
  
  return (
    <>
      <BrowserRouter basename='/Quizz-App/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
