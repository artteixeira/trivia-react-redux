import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: '',
    user: '',
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    const { email, user } = this.state;
    const regexEmail = /^[a-z0-9]+@[a-z0-9]+\.+[a-z0-9]{3}$/;
    const MinLengthUser = 3;
    const disableBtn = regexEmail.test(email) && user.length >= MinLengthUser;
    return (
      <div>
        Login
        <input
          type="email"
          name="email"
          id="email"
          value={ email }
          data-testid="input-gravatar-email"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          name="user"
          id="user"
          value={ user }
          data-testid="input-player-name"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="btn-play"
          disabled={ !disableBtn }
        >
          Play
        </button>
      </div>
    );
  }
}

export default connect()(Login);
