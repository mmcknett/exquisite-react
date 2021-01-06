import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [index, setIndex] = useState(1)
  const [poems, setPoems] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [fields, setFields] = useState([
    'The',
    {
      key: 'adj1',
      placeholder: '',
    },
    {
      key: 'noun1',
      placeholder: '',
    },
    {
      key: 'adv',
      placeholder: '',
    },
    {
      key: 'verb',
      placeholder: '',
    },
    'the',
    {
      key: 'adj2',
      placeholder: '',
    },
    {
      key: 'noun2',
      placeholder: '',
    },
    '.',
  ])

  // is it supposed to be array or an object?
  // I think an array with Strings and objects!

  // need to figure out the logic of this 
  // result is an object 
  const sendSubmission = (results) => {
    // const newFields = [...fields]

    const newFields = fields.map((field) => {
      if (`${field.key}` in results) {
        return field.placeholder = results[`${field.key}`];
      } else {
        return field;
      }
    })

    setIndex(index + 1)

    setFields(newFields)
    setPoems([...poems, newFields.join(' ') ])
    setFields([
    'The',
    {
      key: 'adj1',
      placeholder: '',
    },
    {
      key: 'noun1',
      placeholder: '',
    },
    {
      key: 'adv',
      placeholder: '',
    },
    {
      key: 'verb',
      placeholder: '',
    },
    'the',
    {
      key: 'adj2',
      placeholder: '',
    },
    {
      key: 'noun2',
      placeholder: '',
    },
    '.',
    ])

    

  }

  const revealPoem = () => {
    setIsSubmitted(!isSubmitted)
  }

  // condtionally rendering of coomponents based on isSubmitted 

  const showOrHide = () => {
    if (isSubmitted) {
      return (
        <FinalPoem isSubmitted={isSubmitted} submissions={poems} revealPoem={revealPoem} /> 
      )
    } else {
      return (
        <>
          <RecentSubmission submission={poems[poems.length - 1]} />
          <PlayerSubmissionForm index={index} sendSubmission={sendSubmission} fields={fields}/>
          <FinalPoem isSubmitted={isSubmitted} submissions={poems} revealPoem={revealPoem} />
        </>
    )}
  }


  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>
      {/* <RecentSubmission submission={poems[poems.length - 1]} />
      <PlayerSubmissionForm index={index} sendSubmission={sendSubmission} fields={fields}/>
      <FinalPoem isSubmitted={isSubmitted} submissions={poems} revealPoem={revealPoem} />  */}
      {showOrHide()}

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
