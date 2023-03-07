import React, { Component } from 'react'
import FadeInSection from './FadeInSection'
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div id="intro">
        <FadeInSection>
          <div className="intro-welcome">
            <p>Hi,</p>
            <p className="intro-tagline">my name's <span className="intro-emphasize">Caitlin</span>.</p>
          </div>

          <div className="intro-subtitle-first">I'm <span className="intro-adjective">obsessed</span> with building software.</div>
          <div className="intro-subtitle-second">Currently a student in Singapore University of Technology and Design (SUTD), pursuing all things Artificial Intelligence.</div>
          <button className="intro-contact" disabled>✉️ chiangcaitlin2003@gmail.com</button>
          <button className="intro-contact intro-contact-resume">
            <a href="http://localhost:3000/assets/Resume.pdf" download="caitlin-resume">📩 Download Resume</a>
          </button>
        </FadeInSection>
      </div>
    )
  }
}

export default Home
