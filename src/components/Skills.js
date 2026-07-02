import React, { Component } from "react";
import "../styles/Skills.css";

class Skills extends Component {
  render() {
    const languages_stack = [
      "JavaScript",
      "TypeScript",
      "Python",
      "Ruby",
      "HTML",
      "CSS",
    ];

    const frontend_stack = [
      "React.js",
      "Next.js",
      "Vue.js",
      "Material UI",
      "Chakra UI",
    ];

    const backend_stack = ["Node.js", "Express.js", "Flask", "Ruby on Rails"];

    const ai_llm_stack = ["LangChain", "LangGraph"];

    const database_stack = ["PostgreSQL", "MySQL", "MongoDB", "Firebase"];

    const api_stack = ["REST APIs", "GraphQL (Apollo)"];

    const cloud_stack = [
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Cloudinary",
      "Netlify",
    ];

    const developer_tools_stack = ["Git", "Cypress", "Snakemake"];

    return (
      <div id="skills">
        <div className="skills-intro">
          <div>
            <p className="tech-stack">{"{ TECH-STACK }"}</p>
          </div>
          <div className="skills-description">
            <p>
              As a self-taught programmer, I am passionate about continuously
              expanding my skill set, whether by exploring the latest
              technologies or mastering established ones. I strive to maintain a
              versatile expertise to effectively contribute to a wide variety of
              projects.
            </p>
          </div>
        </div>
        <div className="skills-grid-container">
          <div className="skills-grid-item">
            <p>Languages</p>
            {languages_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
          <div className="skills-grid-item">
            <p>Frontend</p>
            {frontend_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
          <div className="skills-grid-item">
            <p>Backend</p>
            {backend_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
          <div className="skills-grid-item">
            <p>AI/LLM</p>
            {ai_llm_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
          <div className="skills-grid-item">
            <p>Databases</p>
            {database_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
          <div className="skills-grid-item">
            <p>APIs</p>
            {api_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
          <div className="skills-grid-item">
            <p>Cloud</p>
            {cloud_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
          <div className="skills-grid-item">
            <p>Developer Tools</p>
            {developer_tools_stack.map((e) => {
              return <p className="skill-items">{"> " + e}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
