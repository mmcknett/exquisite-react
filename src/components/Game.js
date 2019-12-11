import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lineList: [],
      playerNum: 1,
    };
  }

  addLine = ({adj1, noun1, adverb, verb, adj2, noun2}) => {
    let sentence = `The ${adj1} ${noun1} ${adverb} ${verb} the ${adj2} ${noun2} .`

    const game = this.state

    game.lineList.push(sentence)
    game.playerNum += 1

    this.setState({game})
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    let index = (this.state.playerNum - 2)

    let lastLine = this.state.lineList


    console.log(lastLine[index])


    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        { this.state.playerNum > 1 ? <RecentSubmission lastPlayer={lastLine[index]} /> : ""}



        {/* <RecentSubmission /> */}

        <PlayerSubmissionForm playerNum={this.state.playerNum} addLineCallback={this.addLine}/>

        <FinalPoem lines={this.state.lineList}/>

      </div>
    );
  }
}

const FIELDS = [
  "The",
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
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
