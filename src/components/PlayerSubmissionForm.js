import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [fields, setFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  });

  const onInputChange = (event) => {
    const {name, value} = event.target

    const newFields = {
      ...fields
    }

    newFields[name] = value
    setFields(newFields)

  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    // // sends the state up to the game
    props.sendSubmission(fields);
    // // with a callback func
   
    // // clear the text fields 
    setFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    })
  }

  const validateInput = (field) => {
    return field !== ''
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit} >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <p>The</p>
          <input
            placeholder="adjective"
            type="text" 
            name='adj1'
            value={fields.adj1}
            onChange={onInputChange}
            className={validateInput(fields.adj1) ? 'PlayerSubmissionFormt__input--valid' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input
            placeholder='noun'
            type='text'
            name='noun1'
            value={fields.noun1}
            onChange={onInputChange}
            className={validateInput(fields.noun1) ? 'PlayerSubmissionFormt__input--valid' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            placeholder='adverb'
            type='text'
            name='adv'
            value={fields.adv}
            onChange={onInputChange}
            className={validateInput(fields.adv) ? 'PlayerSubmissionFormt__input--valid' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            placeholder='verb'
            type='text'
            name='verb'
            value={fields.verb}
            onChange={onInputChange}
            className={validateInput(fields.verb) ? 'PlayerSubmissionFormt__input--valid' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <p>the</p>
          <input 
            placeholder='adjective'
            type='text'
            name='adj2'
            value={fields.adj2}
            onChange={onInputChange}
            className={validateInput(fields.adj2) ? 'PlayerSubmissionFormt__input--valid' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <input 
            placeholder='noun'
            type='text'
            name='noun2'
            value={fields.noun2}
            onChange={onInputChange}
            className={validateInput(fields.noun2) ? 'PlayerSubmissionFormt__input--valid' : 'PlayerSubmissionFormt__input--invalid' }
          />
          <p>.</p>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
