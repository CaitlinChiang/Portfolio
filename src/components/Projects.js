import React, { Component } from 'react'
import '../styles/Projects.css'

class Projects extends Component {
  render() {
    const projects = [
      { 
        title: 'PeakQuest', 
        about: 'A mobile application that helps users decide hiking trails to embark and trains them to the appropriate fitness level.', 
        link: 'https://github.com/CaitlinChiang/Hiking-Software', 
        technologies: 'React Native'
      },
      { 
        title: 'The Decolonization Project', 
        about: 'An online repository where indigenous tribes are in control of their own online data and information that is being published.', 
        link: 'https://github.com/CaitlinChiang/The-Decolonization', 
        technologies: 'React.js'
      },
      { 
        title: 'Electric Vehicle Dashboards', 
        about: 'A number of various dashboards meant to be displayed in an electric vehicle, controlled via steering wheel.', 
        link: 'https://github.com/CaitlinChiang/EV-Screens', 
        technologies: 'React.js, Python3, RPI, Arduino'
      },
      { 
        title: 'Mobile Hydration Dashboard', 
        about: 'A mobile web-app that displays the varying water levels of a water container to the user.', 
        link: 'https://github.com/CaitlinChiang/Hydration-Dashboard', 
        technologies: 'React.js, Firebase'
      },
      { 
        title: 'Mobile Hydration Arduino', 
        about: 'The accompanying Arduino code for the mobile hydration dashboard project.', 
        link: 'https://github.com/CaitlinChiang/Hydration-Arduino', 
        technologies: 'Arduino C++, Firebase'
      },
      { 
        title: 'This Portfolio Site', 
        about: 'A site that showcases my personal portfolio.', 
        link: 'https://github.com/CaitlinChiang/Portfolio-Site', 
        technologies: 'React.js, Netlify'
      },
      { 
        title: 'E-commerce System', 
        about: 'A fully built e-commerce template system, from the shopping experience to the management of stock.', 
        link: 'https://github.com/CaitlinChiang/Ecommerce-System', 
        technologies: 'MongoDB, Node.js + Express.js, React.js Hooks, Typescript, Apollo GraphQL, AWS, Cloudinary'
      },
      { 
        title: 'Heart to Heart Project', 
        about: 'Heart to Heart is a project in which two users can visualize their heartbeats syncing via LED lights.', 
        link: 'https://github.com/CaitlinChiang/Portfolio-Site', 
        technologies: 'Arduino C++'
      },
      { 
        title: 'Instahelp', 
        about: 'A platform that allows organizations to match with those in need of help during natural disasters.', 
        link: 'https://github.com/CaitlinChiang/instahelp', 
        technologies: 'React.js, Firebase, Netlify'
      },
      { 
        title: 'Soren-Frontend', 
        about: 'A frontend e-commerce site for company Soren which focuses on selling clothing.', 
        link: 'https://github.com/CaitlinChiang/Soren-Frontend', 
        technologies: 'React.js, Netlify',
      },
      { 
        title: 'Soren-Backend', 
        about: 'A backend system for e-commerce built based on SQL.', 
        link: 'https://github.com/CaitlinChiang/Soren-Backend', 
        technologies: 'SQL, Node.js + Express.js, Microsoft Azure'
      },
      { 
        title: 'The Busy Bee', 
        about: 'A full e-commerce system for a business that focuses on selling body care products.', 
        link: 'https://github.com/CaitlinChiang/The-Busy-Bee', 
        technologies: 'React.js, Firebase, Netlify'
      },
      { 
        title: 'The Rolls Kitchen', 
        about: 'A full e-commerce system for a business that focuses on selling bakery goods.', 
        link: 'https://github.com/CaitlinChiang/The-Rolls-Kitchen', 
        technologies: 'React.js, Firebase, Netlify'
      },
      { 
        title: 'Pandemic Dashboard', 
        about: 'A dashboard that serves as a central place of information regarding the pandemic.', 
        link: 'https://github.com/CaitlinChiang/Battle-Covid-19-Website', 
        technologies: 'React.js, Firebase, Netlify'
      }
    ]

    return (
      <div id="projects">
          <div className="projects-intro">
            <div>
              <p className="projects-word">{'{ PROJECTS }'}</p>
            </div>
            <div className="projects-description">
              <p>Here is a list of some projects that I'm proud of (and can legally show to the public). These projects are outside of my work experiences, and can either be academic projects or things that I like to create in my free time. The older ones no longer reflect my abilities and skills, but they've definitely helped me in growing them.</p>
            </div>
          </div>

          <div className="project-gallery">
            {projects?.map((project) => {
              return (
                <div className="project-box">
                  <div className="icon-project">
                    <a target="_blank" href={project?.link} rel="noreferrer">
                      <span className="arrow">{'➜'}</span>
                    </a>
                  </div>
                  <div className="project-title">{project?.title}</div>
                  <div className='project-divider' />
                  <div className="project-about">{project?.about}</div>
                  <p className="tech">{project?.technologies}</p>    
                </div>
              )
            })}
          </div>
      </div>
    )
  }
}

export default Projects
