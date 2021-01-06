import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const onFinalSubmit = (event) => {
    event.preventDefault();
    // callback function to be passed up to the game comp
    props.revealPoem();
  }

  const lines = props.submissions.map(line => 
    <li key={line} className="FinalPoem__poem--listitems">{line}</li>
  )

  const hideRevealPoemBtn = () => {
    if (props.isSubmitted) {
      return (
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <ul className="FinalPoem__poem--list">{lines}</ul>
        </section>
      )
    } else {
      return (
        <div className="FinalPoem__reveal-btn-container">
          <input onClick={onFinalSubmit} type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
        </div>
      )
    }
  }

  return (
    <div className="FinalPoem">
      {hideRevealPoemBtn()}
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
