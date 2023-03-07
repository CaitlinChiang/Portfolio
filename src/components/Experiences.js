import React, { Component } from 'react'
import FadeInSection from './FadeInSection'
import '../styles/Skills.css'

class Experiences extends Component {
  render() {
    const experiences = [
      {
        company: 'The Rolls Kitchen, The Busy Bee, Soren Apparel',
        position: 'Freelance Software Engineer',
        timeline: 'Mar 2020 - Jun 2021',
        details: 'Designed and built e-commerce websites for 3 businesses',
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
        details: 'Dragonpay is the only payment gateway in the Philippines that allows non-credit card holders to pay via bank',
        description: [
          'Deployed an internal application for the online-screening of the employees during the pandemic',
          'Deployed an internal business expense tracking tool that automated the workflow of the finance team'
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
          'Collaborate with the computer science faculty in designing and building an internal university software platform that allows students across all degree programmes to effectively use Chat-GPT free of charge',
          'Deploy features that allow students to each have a user account that changes the platform experience based from their needs',
          'Deploy features that allow administrators to analyze all inputs and behaviors of each student via data visualization, supplementing this by creating and sending surveys within the application'
        ]
      }
    ]

    return (
      <div id="experiences">
        <FadeInSection>

        </FadeInSection>
      </div>
    )
  }
}

export default Experiences
