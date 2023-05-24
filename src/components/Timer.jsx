import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

class Timer extends Component {
  state = {
    timeCounter: 9999,
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
      this.setState({ timeCounter: 9999 });
      resetTimerFunc();
    }
  };

  // startTimer = () => {
  //   const time = 1000;
  //   this.timer = setInterval(() => {
  //     this.setState((prevState) => ({ timeCounter: prevState.timeCounter - 1 }));
  //   }, time);
  // };

  startTimer = () => {
    const { timeCounter } = this.state;
    const { resetTimerFunc } = this.props;
    const time = 1000;
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ timeCounter: prevState.timeCounter - 1 }), () => {
        if (timeCounter === 0) {
          clearInterval(this.timer);
          resetTimerFunc();
        }
      });
    }, time);
  };

  render() {
    const { timeCounter } = this.state;
    const { styleBtn } = this.props;
    return (
      <div className="timer-container">
        <div>
          {timeCounter > 0 ? (
            <span>
              {timeCounter}
              {' '}
              segundos restantes
            </span>
          ) : (styleBtn()) }
        </div>
        <div className="countdown">
          <svg>
            <circle r="18" cx="20" cy="20" />
          </svg>
        </div>
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
