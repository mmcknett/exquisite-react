import React, { Component } from 'react';
import PropTypes from "prop-types";

import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: "",
    };
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  
    const newLine = {
      adj1: this.state.adj1,
      noun1: this.state.noun1,
      adverb: this.state.adverb,
      verb: this.state.verb,
      adj2: this.state.adj2,
      noun2: this.state.noun2
    };

    this.setState({
      adj1: "",
      noun1: "",
      adverb: "",
      verb: "",
      adj2: "",
      noun2: "",
    });

    this.props.addLineCallback(newLine);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm" onSubmit={this.onFormSubmit}>
        <h3>Player Submission Form for Player #{ this.props.playerNum }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            <span>The</span>

            <input
              onChange={this.onFieldChange}
              name="adj1"
              value={this.state.adj1}
              placeholder="adjective"
              type="text" />
            
            <input
              onChange={this.onFieldChange}
              name="noun1"
              value={this.state.noun1}
              placeholder="noun"
              type="text" />

            <input
              onChange={this.onFieldChange}
              name="adverb"
              value={this.state.adverb}
              placeholder="adverb"
              type="text" />
            
            <input
              onChange={this.onFieldChange}
              name="verb"
              value={this.state.verb}
              placeholder="verb"
              type="text" />

            <span>the</span>

            <input
              onChange={this.onFieldChange}
              name="adj2"
              value={this.state.adj2}
              placeholder="adjective"
              type="text" />

            <input
              onChange={this.onFieldChange}
              name="noun2"
              value={this.state.noun2}
              placeholder="noun"
              type="text" />

            <span>.</span>

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  playerNum: PropTypes.number.isRequired,
  addLineCallback: PropTypes.func.isRequired,
};

export default PlayerSubmissionForm;
