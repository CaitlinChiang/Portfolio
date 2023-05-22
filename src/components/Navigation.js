import React, { Component } from 'react'
import '../styles/Navigation.css'

class Navigation extends Component {
  mobileMenu_hide = () => document.getElementById('mobileMenuToggler').checked = false

  render() {
    return (
      <header>
				<section class="desktopNavbar">
					<ul>
						<li> <a href="/#intro">About</a> </li>
						<li> <a href="/#skills">Skills</a> </li>
						<li> <a href="/#experiences">Experiences</a> </li>
						<li> <a href="/#projects">Projects</a> </li>
					</ul>
				</section>

				<section class="mobileNavbar">
					<div class="mobileMenuContainer">
						<input type="checkbox" class="mobileMenuToggler" id="mobileMenuToggler" />

						<div class="hamburger"><div></div></div>

						<div class="mobileMenu">
							<div>
								<div>
									<ul>
										<li> <a href="/#intro" onClick={this.mobileMenu_hide}>About</a> </li>
										<li> <a href="/#skills" onClick={this.mobileMenu_hide}>Skills</a> </li>
										<li> <a href="/#experiences" onClick={this.mobileMenu_hide}>Experiences</a> </li>
										<li> <a href="/#projects" onClick={this.mobileMenu_hide}>Projects</a> </li>
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
