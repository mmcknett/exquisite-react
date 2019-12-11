import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            {
              // Put your form inputs here... We've put in one below as an example
            }
            <span>The</span>

            <input
              placeholder="adjective"
              type="text" />
            
            <input
              placeholder="noun"
              type="text" />

            <input
              placeholder="adverb"
              type="text" />
            
            <input
              placeholder="verb"
              type="text" />

            <span>the</span>

            <input
              placeholder="adjective"
              type="text" />

            <input
              placeholder="noun"
              type="text" />

            <span>.</span>
            {/* <input
              placeholder="hm..."
              type="text" /> */}
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
