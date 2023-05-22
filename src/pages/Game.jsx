import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Game extends Component {
  state = {
    questions: [],
    questionNumber: 0,
  };

  componentDidMount() {
    this.startGame();
  }

  startGame = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await response.json();
    if (data.results.length === 0) {
      const { history } = this.props;
      localStorage.removeItem('token');
      history.push('/');
    }
    this.setState({
      questions: data.results,
    });
  };

  render() {
    const { questions, questionNumber } = this.state;
    return (
      <div>
        <h1>Game</h1>
        {questions.length > 0 && (
          <div>
            <h3 data-testid="question-category">{questions[questionNumber].category}</h3>
            <h2 data-testid="question-text">{questions[questionNumber].question}</h2>
            <div>
              <button data-testid="correct-answer">
                {questions[questionNumber]
                  .correct_answer}
              </button>
              {questions[questionNumber].incorrect_answers.map((elem, i) => (
                <button key={ i } data-testid="wrong-answer">{elem}</button>
              ))}
            </div>
          </div>
        )}

      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Game);
