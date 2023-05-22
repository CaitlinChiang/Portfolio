import React, { Component } from 'react'
import '../styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div id="intro">
        <div className='intro-left'>
          <img class="curved-image" src={"http://localhost:3000/images/profile.jpg"} alt="Profile Image" />
        </div>
        <div className="intro-right">
          <div className="intro-name">
            <p className="intro-emphasize">I'm Caitlin Chiang.</p>
            <p className="intro-description">Full-Stack Developer</p>
          </div>

          <div className="intro-caption"><span className="emphasize-description">I'm obsessed with building software.</span> Currently a student in the Singapore University of Technology and Design, I'm pursuing a degree in computer science mixed in with design and artificial intelligence. I am passionate about automating manual systems and crafting web-products that serve immense value to the community.</div>
          <button className="intro-contact intro-contact-resume">
            <a href="http://localhost:3000/assets/Resume.pdf" download="caitlin-resume">Download CV</a>
          </button>
        </div>
      </div>
    )
  }
}

export default Home
