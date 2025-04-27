import React, { Component } from 'react'
import '../styles/Home.css'

class Home extends Component {
  render() {
    const publicUrl = process.env.PUBLIC_URL;

    return (
      <div id="intro">
        <div className='intro-left'>
          <img class="curved-image" src={publicUrl + "/images/profile.jpg"} alt="Profile Image" />
        </div>
        <div className="intro-right">
          <div className="intro-name">
            <p className="intro-emphasize">I'm Caitlin Chiang.</p>
            <p>An AI and Full-Stack Software Engineer</p>
          </div>

          <div className="intro-caption"><span className="emphasize-description">I'm obsessed with building software.</span> Currently a graduating senior in the Singapore University of Technology and Design, I'm pursuing a degree in Design and Artificial Intelligence, with minors in Computer Science and Digital Humanities. I am <span className="emphasize-description">passionate</span> about <span className="emphasize-description">automating manual systems and crafting web-products</span> that serve immense value to the community.</div>
          <button className="intro-contact intro-contact-resume">
            <a href={publicUrl + "/assets/Resume.pdf"} download="caitlin-resume">Download Resume</a>
          </button>
          <button className="intro-contact intro-contact-github">
            <a href={"https://github.com/CaitlinChiang"} download="caitlin-resume">{'Visit My GitHub →'}</a>
          </button>
        </div>
      </div>
    )
  }
}

export default Home
