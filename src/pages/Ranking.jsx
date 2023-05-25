import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import './CSS/Ranking.css';

export default class Ranking extends Component {
  returnHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const storage = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div>

        <h2 data-testid="ranking-title">Ranking</h2>

        <button
          data-testid="btn-go-home"
          onClick={ this.returnHome }
        >
          Home
        </button>
        <div className="ranking-box">
          { storage.sort((a, b) => b.totalScore - a.totalScore).map((player, index) => (
            <div className="ranking-player" key={ index }>
              <div>
                <img src={ `https://www.gravatar.com/avatar/${md5(player.gravatarEmail).toString()}` } alt="Player" width="80px" />
                <p data-testid={ `player-name-${index}` }>
                  { player.name }
                </p>
              </div>

              <div>
                <p data-testid={ `player-score-${index}` }>
                  { `${player.totalScore} pontos`}
                </p>
              </div>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
