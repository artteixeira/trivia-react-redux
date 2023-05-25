import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';

class Feedback extends Component {
  componentDidMount() {
    const { name, totalScore, gravatarEmail } = this.props;
    const previousRanking = localStorage.getItem('ranking');
    const ranking = { name, totalScore, gravatarEmail };
    if (!previousRanking) {
      const arrayRanking = [];
      arrayRanking.push(ranking);
      localStorage.setItem('ranking', JSON.stringify(arrayRanking));
    } else {
      const parsedpreviousRanking = JSON.parse(previousRanking);
      const arrayRanking = [...parsedpreviousRanking, ranking];
      const stringifiedRanking = JSON.stringify(arrayRanking);
      localStorage.setItem('ranking', stringifiedRanking);
    }
  }

  render() {
    const { assertions, totalScore } = this.props;
    const three = 3;
    return (
      <div>

        <Header />
        <p
          data-testid="feedback-text"
        >
          {assertions >= three ? 'Well Done!' : 'Could be better...'}
        </p>
        <p
          data-testid="feedback-total-question"
        >
          {assertions}
        </p>
        <p
          data-testid="feedback-total-score"
        >
          {totalScore}
        </p>
        <Link to="/">
          <button
            data-testid="btn-play-again"

          >
            Play Again
          </button>
        </Link>

        <button
          data-testid="btn-ranking"
          onClick={ () => {
            const { history } = this.props;
            history.push('/ranking');
          } }
        >
          Ranking
        </button>

      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  name: PropTypes.string.isRequired,
  totalScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  totalScore: state.player.score,
  name: state.player.name,
  gravatarEmail: state.player.gravatarEmail,
});

export default connect(mapStateToProps)(Feedback);
