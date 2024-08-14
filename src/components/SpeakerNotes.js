import React, { Component } from 'react'
import '../styles/SpeakerNotes.css'

class SpeakerNotes extends Component {
  render() {
    const publicUrl = process.env.PUBLIC_URL;

    return (
      <div id="speaker">
        <div className="speaker-right">
          <div className="speaker-name">
            <p className="speaker-emphasize">Here There!</p>
            <p>I Hope This Presentation Provides Value for You.</p>
          </div>

          <div className="speaker-caption">To access the CAMP 2024 ICA presentation, kindly download it from the button below:</div>
          <button className="speaker-contact speaker-contact-resume">
            <a href={publicUrl + "/assets/camp-speaker-notes.pdf"} download="camp-singapore-notes">Download Presentation</a>
          </button>
        </div>
      </div>
    )
  }
}

export default SpeakerNotes
