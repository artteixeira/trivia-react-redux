import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  state = {
    timeCounter: 30,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    this.handlerCHangeToResetTimer(prevProps);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handlerCHangeToResetTimer = (prevProps) => {
    const { resetTimer, resetTimerFunc } = this.props;
    if (prevProps.resetTimer !== resetTimer && resetTimer) {
      this.setState({ timeCounter: 30 });
      resetTimerFunc();
    }
  };

  startTimer = () => {
    const time = 1000;
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ timeCounter: prevState.timeCounter - 1 }));
    }, time);
  };

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
  resetTimer: PropTypes.bool.isRequired,
  resetTimerFunc: PropTypes.func.isRequired,
};

export default Timer;
