import React, { Component } from 'react'
import FadeInSection from './FadeInSection'
import '../styles/Experiences.css'

class Experiences extends Component {
  showExperience = (event, idx) => {
    var i, tab_content, tablinks
    
    tab_content = document.getElementsByClassName("tab-content")
    for (i = 0; i < tab_content.length; i++) {
      tab_content[i].style.display = "none"
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(idx).style.display = "block";
    event.currentTarget.className += " active";
  }

  componentDidMount() {
    document.getElementById(5).style.display = "block";
  }

  render() {
    const experiences = [
      {
        position: 'Freelance Software Engineer',
        timeline: 'Mar 2020 - Jun 2021',
        details: 'Designed and built e-commerce websites for The Rolls Kitchen, The Busy Bee, and Soren Apparel',
        description: [
          'Deployed full e-commerce systems for purchasing of products (customers) and management of store inventory + orders (administrators)',
          'Collaborated with the CEOs to design the user interface of the website',
          'Communicated with customers for user experience research in refining the website'
        ]
      },
      {
        company: 'Dragonpay',
        position: 'Software Engineer',
        timeline: 'Jul 2021',
        details: 'Dragonpay is the only payment gateway in the Philippines that allows non-credit card holders to pay via banking',
        description: [
          'Deployed an internal application for employee health tracking',
          'Deployed an internal business expense tracking tool that automated the workflow of the finance team'
        ]
      },
      {
        company: 'Philippine Red Cross',
        position: 'Volunteer Software Engineer',
        timeline: 'Jul 2021 - Oct 2021',
        details: '',
        description: [
          'Coded features for the application that automated the workflow of the healthcare professionals',
          'Developed module-level testing scripts for the software platform to ensure seamless performance'
        ]
      },
      {
        company: 'Dashlabs.ai',
        position: 'Software Engineer',
        timeline: 'Dec 2020 - Dec 2021',
        details: 'Dashlabs.ai is startup accelerated by Y-Combinator (W21) that specializes in medical software',
        description: [
          'Managed a developer team of 6 that programmed all the analytics as a software solution for medical staff',
          'Collaborated with the finance and operations team to design thorough analytics for data visualization',
          'Deployed 30+ features that automated medical professionals’  workflows and be more time efficient',
          'Aggregated the various data collected to design charts and dashboards with meaningful correlations',
          'Mentored and on-boarded new employees regarding the technologies used in the software'
        ]
      },
      {
        company: 'Singapore University of Technology and Design',
        position: 'Software Engineer',
        timeline: 'Jan 2023 - PRESENT',
        details: '',
        description: [
          'Collaborate with the computer science faculty in designing and building an internal university software platform that allows students to enhance learning via Artificial Intelligence',
          'Deploy features that allow students to each have a user account that changes the platform experience based from their needs',
          'Deploy features that allow administrators to analyze all inputs and behaviors of each student via data visualization, supplementing this by creating, updating, and sending various surveys within the application'
        ]
      },
      {
        company: 'Jublia',
        position: 'Frontend Software Engineer',
        timeline: 'August 2023 - PRESENT',
        details: 'Singapore startup that specializes in digital management of various events',
        description: [
          'Refactor legacy code files and convert them to Vue.js dynamic components'
        ]
      }
    ]

    return (
      <div id="experiences">
        <div className="experiences-intro">
          <div>
            <p className="experiences-word">{'{ EXPERIENCES }'}</p>
          </div>
          <div className="experiences-description">
            <p>I've acquired a range of experiences from being a web-freelancer, to a volunteer, to a full-time software engineer lead.</p>
          </div>
        </div>

        <div className="divider"/>

        <div class="tabs">
          <button class="tablinks active" onClick={event => this.showExperience(event, 5)}>05</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 4)}>04</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 3)}>03</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 2)}>02</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 1)}>01</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 0)}>00</button>
        </div>

        {experiences.map((experiences, idx) => {
          const { company, position, timeline, details, description } = experiences

          return (
            <div id={idx} class="tab-content">
              <p className="tab-company">{position}{company ? ' @' : ''}<span className="highlight">{company}</span></p>
              <p className="tab-details">{details}</p>
              <p className="timeline">{timeline}</p>
              <div>
                {description.map((e, i) => {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <p><span className="highlight">{'<> '}</span>{e}</p>
                    </FadeInSection>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div className="divider"/>
    </div>
    )
  }
}

export default Experiences
