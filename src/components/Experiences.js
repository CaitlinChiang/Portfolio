import React, { Component } from 'react'
import FadeInSection from './FadeInSection'
import '../styles/Experiences.css'
import { experiences } from '../data/experiences'

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
    document.getElementById(9).style.display = "block";
  }

  render() {
    return (
      <div id="experiences">
        <div className="experiences-intro">
          <div>
            <p className="experiences-word">{'{ EXPERIENCES }'}</p>
          </div>
          <div className="experiences-description">
            <p>I have developed a diverse set of experiences, progressing from freelance web developer and volunteer roles to serving as a full-time lead software engineer.</p>
          </div>
        </div>

        <div className="divider"/>

        <div class="tabs">
          <button class="tablinks active" onClick={event => this.showExperience(event, 9)}>09</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 8)}>08</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 7)}>07</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 6)}>06</button>
          <button class="tablinks" onClick={event => this.showExperience(event, 5)}>05</button>
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
