import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import logo from '../../pages/CSS/imagens/Logo.png';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    const hash = md5(email).toString();
    return (
      <section className="header">
        <div className="headerLogo">
          <img src={ logo } alt="Logo" />
        </div>
        <section className="headerPlayerInfos">
          <div className="user">
            <img
              src={ `https://www.gravatar.com/avatar/${hash}` }
              data-testid="header-profile-picture"
              alt="Player"
            />
            <p data-testid="header-player-name">{name}</p>
          </div>
          <div className="score">
            <span data-testid="header-score" className="scoreHeader">{score}</span>
          </div>
        </section>
      </section>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
