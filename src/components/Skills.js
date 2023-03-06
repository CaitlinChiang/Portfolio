import React, { Component } from 'react'
import FadeInSection from './FadeInSection'
import '../styles/Skills.css'

class Skills extends Component {
  render() {
    const frontend_stack = [
      'Javascript ES6+',
      'React.js',
      'Typescript',
      'HTML',
      'Material UI',
      'CSS'
    ]

    const backend_stack = [
      'Node.js',
      'Express.js',
      'Python 3',
      'Flask'
    ]

    const database_stack = [
      'MongoDB',
      'MySQL',
      'Firebase'
    ]

    const other_services = [
      'Apollo GraphQL',
      'Arduino',
      'Amazon Web Services',
      'Cloudinary',
      'Netlify',
      'Cypress.io'
    ]

    const currently_learning = [
      'Flutter',
      'Heroku'
    ]

    return (
      <div id="skills">
        <FadeInSection>
          <div className="skills-intro">
            <p>Here's a list of technologies that I've worked with:</p>
          </div>
          <div className="skills-grid-container">
            <div class="skills-grid-item">
              <p>FRONTEND</p>
              {}
            </div>
            <div class="skills-grid-item">
              <p>BACKEND</p>
            </div>
            <div class="skills-grid-item">
              <p>DATABASES</p>
            </div>  
            <div class="skills-grid-item">
              <p>OTHERS</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    )
  }
}

export default Skills
