import React, { Component } from 'react'
import '../styles/Skills.css'

class Skills extends Component {
  render() {
    const frontend_stack = [
      'Javascript ES6+',
      'React.js',
      'Typescript',
      'Angular.js',
      'Vue.js',
      'HTML'
    ]

    const design_stack = [
      'CSS',
      'Material UI',
      'Chakra UI'
    ]

    const backend_stack = [
      'Node.js',
      'Express.js',
      'Next.js',
      'Python 3',
      'Flask',
      'Django',
      'Ruby on Rails'
    ]

    const mobile_stack = [
      'React Native'
    ]

    const database_stack = [
      'MongoDB',
      'MySQL 8.0',
      'PostgreSQL',
      'Firebase'
    ]

    const services_stack = [
      'Amazon Web Services',
      'Google Cloud Platform',
      'Microsoft Azure',
      'Cloudinary',
      'Netlify'
    ]

    const others_stack = [
      'Apollo GraphQL',
      'Arduino + Arduino C++',
      'Rapberry Pi 3',
      'Git',
      'Cypress.io'
    ]

    return (
      <div id="skills">
        <div className="skills-intro">
          <div>
            <p className="tech-stack">{'{ TECH-STACK }'}</p>
          </div>
          <div className="skills-description">
            <p>As a self-taught programmer, I enjoy learning new technologies whether they have just become the new hot thing or have been around for a while. I like to ensure that my skill set is diverse in order to cater towards different kinds of projects.</p>
          </div>
        </div>
        <div className="skills-grid-container">
          <div class="skills-grid-item">
            <p>Frontend</p>
            {frontend_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Design</p>
            {design_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Backend</p>
            {backend_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Mobile</p>
            {mobile_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Databases</p>
            {database_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>  
          <div class="skills-grid-item">
            <p>Services</p>
            {services_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
          <div class="skills-grid-item">
            <p>Others</p>
            {others_stack.map((e) => {
              return <p className="skill-items">{'> ' + e}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
