import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import './CSS/Game.css';

class Game extends Component {
  state = {
    questions: [],
    questionNumber: 0,
    answers: [],
  };

  componentDidMount() {
    this.startGame();
  }

  startGame = async () => {
    const { questionNumber } = this.state;
    const token = localStorage.getItem('token');
    const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await response.json();
    if (data.results.length === 0) {
      const { history } = this.props;
      localStorage.removeItem('token');
      history.push('/');
    } else {
      this.setState({
        questions: data.results,
        answers: [...data.results[questionNumber].incorrect_answers,
          data.results[questionNumber].correct_answer],
      });
    }
  };

  shuffleQuestions = (array) => {
    const randomNumber = 0.5;
    return array.sort(() => Math.random() - randomNumber);
  };

  styleBtn = () => {
    const elements = document.querySelectorAll('.answer');
    elements.forEach((element) => {
      if (element.classList.contains('correct-answer')) {
        element.classList.add('correct');
      } else if (element.classList.contains('wrong-answer')) {
        element.classList.add('wrong');
      }
    });
  };

  render() {
    const { questions, questionNumber, answers } = this.state;
    const randomQuestions = this.shuffleQuestions(answers);
    return (
      <div>
        <Header />
        <h1>Game</h1>
        {questions.length > 0 && (
          <div>
            <h3 data-testid="question-category">{questions[questionNumber].category}</h3>
            <h2 data-testid="question-text">{questions[questionNumber].question}</h2>
            <div data-testid="answer-options">
              { randomQuestions.map((element, index) => {
                if (element === questions[questionNumber]
                  .correct_answer) {
                  return (
                    <button
                      key={ index }
                      className="answer correct-answer"
                      data-testid="correct-answer"
                      onClick={ this.styleBtn }
                    >
                      {element}

                    </button>
                  );
                }
                return (
                  <button
                    key={ index }
                    className="answer wrong-answer"
                    data-testid={ `wrong-answer-${index}` }
                    onClick={ this.styleBtn }
                  >
                    {element}
                  </button>
                );
              })}
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
