import React, { Component } from 'react';

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
    return (
      <div>
        {timeCounter > 0 ? (
          <span>
            {timeCounter}
            {' '}
            segundos restantes
          </span>
        ) : (
          <span>Tempo esgotado</span>
        )}
      </div>
    );
  }
}

export default Timer;
