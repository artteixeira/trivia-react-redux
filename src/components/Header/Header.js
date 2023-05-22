import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    const hash = md5(email).toString();
    return (
      <section className="header">
        <div className="user">
          <img
            src={ `https://www.gravatar.com/avatar/${hash}` }
            data-testid="header-profile-picture"
            alt="Player"
          />
          <p data-testid="header-player-name">{name}</p>
        </div>
        <div className="score">
          <span data-testid="header-score">{score}</span>
        </div>
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
  email: state.user.gravatarEmail,
  name: state.user.name,
  score: state.user.score,
});

export default connect(mapStateToProps)(Header);
