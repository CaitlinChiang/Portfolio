import React, { Component } from 'react'
import '../styles/Navigation.css'

class Navigation extends Component {
  mobileMenu_hide = () => document.getElementById('mobileMenuToggler').checked = false;

  render() {
    return (
      <header>
        <section className="desktopNavbar">
          <ul>
            <li><a href="/#intro">About</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#experiences">Experiences</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/camp-speaker-notes">Speaker Notes</a></li>
          </ul>
        </section>

        <section className="mobileNavbar">
          <div className="mobileMenuContainer">
            <input type="checkbox" className="mobileMenuToggler" id="mobileMenuToggler" />

            <div className="hamburger"><div></div></div>

            <div className="mobileMenu">
              <div>
                <div>
                  <ul>
                    <li><a href="/#intro" onClick={this.mobileMenu_hide}>About</a></li>
                    <li><a href="/#skills" onClick={this.mobileMenu_hide}>Skills</a></li>
                    <li><a href="/#experiences" onClick={this.mobileMenu_hide}>Experiences</a></li>
                    <li><a href="/#projects" onClick={this.mobileMenu_hide}>Projects</a></li>
                    <li><a href="/camp-speaker-notes" onClick={this.mobileMenu_hide}>Speaker Notes</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    )
  }
}

export default Navigation
