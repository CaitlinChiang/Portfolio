import React, { Component } from 'react'
import FadeInSection from './FadeInSection'
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div id="intro">
        <FadeInSection>
          <div className="intro-welcome">
            <p>hey there,</p>
            <p className="intro-name">it's caitlin.</p>
          </div>
          <div className="intro-subtitle-first">Software engineer, fully operated by passion and drive.</div>
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
