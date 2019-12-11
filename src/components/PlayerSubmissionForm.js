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

  onAdjectiveChange = (event) => {
    this.setState({
      adj1: event.target.value,
    });
  }

  onNounChange = (event) => {
    this.setState({
      noun1: event.target.value,
    });
  }

  onAdverbChange = (event) => {
    this.setState({
      adverb: event.target.value,
    });
  }


  onVerbChange = (event) => {
    this.setState({
      verb: event.target.value,
    });
  }

  onAdjective2Change = (event) => {
    this.setState({
      adj2: event.target.value,
    });
  }

  onNoun2Change = (event) => {
    this.setState({
      noun2: event.target.value,
    });
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
            {
              // Put your form inputs here... We've put in one below as an example
            }
            <span>The</span>

            <input
              onChange={this.onAdjectiveChange}
              value={this.state.adj1}
              adj1="adj1"
              placeholder="adjective"
              type="text" />
            
            <input
              onChange={this.onNounChange}
              value={this.state.noun1}
              noun="noun"
              placeholder="noun"
              type="text" />

            <input
              onChange={this.onAdverbChange}
              value={this.state.adverb}
              adverb="adverb"
              placeholder="adverb"
              type="text" />
            
            <input
              onChange={this.onVerbChange}
              value={this.state.verb}
              verb="verb"
              placeholder="verb"
              type="text" />

            <span>the</span>

            <input
              onChange={this.onAdjective2Change}
              value={this.state.adj2}
              adj2="adj2"
              placeholder="adjective"
              type="text" />

            <input
              onChange={this.onNoun2Change}
              value={this.state.noun2}
              noun2="noun2"
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
