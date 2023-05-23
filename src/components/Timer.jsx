import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  state = {
    timeCounter: 30,
  };

  componentDidMount() {
    const time = 1000;
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ timeCounter: prevState.timeCounter - 1 }));
    }, time);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { timeCounter } = this.state;
    const { styleBtn } = this.props;
    return (
      <div>
        {timeCounter > 0 ? (
          <span>
            {timeCounter}
            {' '}
            segundos restantes
          </span>
        ) : (styleBtn()) }
      </div>
    );
  }
}

Timer.propTypes = {
  styleBtn: PropTypes.func.isRequired,
};

export default Timer;
