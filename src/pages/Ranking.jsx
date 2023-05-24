import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './CSS/Ranking.css';

export default class Ranking extends Component {
  returnHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const index = 0;
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
          <div className="ranking-player">
            <div>
              <img src="https://xsgames.co/randomusers/assets/images/favicon.png" alt="Player" width="80px" />
              <p data-testid={ `player-name-${index}` }>Jogador</p>
            </div>

            <div>
              <p data-testid={ `player-score-${index}` }>33 pontos</p>
            </div>
          </div>
          <div className="ranking-player">
            <div>
              <img src="https://xsgames.co/randomusers/assets/images/favicon.png" alt="Player" width="80px" />
              <p data-testid={ `player-name-${index}` }>Jogador</p>
            </div>

            <div>
              <p data-testid={ `player-score-${index}` }>33 pontos</p>
            </div>
          </div>
          <div className="ranking-player">
            <div>
              <img src="https://xsgames.co/randomusers/assets/images/favicon.png" alt="Player" width="80px" />
              <p data-testid={ `player-name-${index}` }>Jogador</p>
            </div>

            <div>
              <p data-testid={ `player-score-${index}` }>33 pontos</p>
            </div>
          </div>
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
