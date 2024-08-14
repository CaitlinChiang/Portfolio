import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import SpeakerNotes from './components/SpeakerNotes'
import './App.css'
import './styles/Global.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        
        <div id="content">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Skills />
                <Experiences />
                <Projects />
              </>
            } />
            <Route path="/camp-speaker-notes" element={<SpeakerNotes />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
