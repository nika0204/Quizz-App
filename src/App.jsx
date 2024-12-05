
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import Quizz from './component/Quizz.jsx'
import End from './component/End.jsx';

import './css/App.css'
import './css/Normalize.css'


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
