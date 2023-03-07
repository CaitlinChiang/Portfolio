import Home from './components/Home'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import './App.css'
import './styles/Global.css'

function App() {
  return (
    <div className="App">
      <div id="content">
        <Home />
        <Skills />
        <Experiences />
      </div>
    </div>
  )
}

export default App
