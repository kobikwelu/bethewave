import React, { Component } from 'react';


class FailedMessage extends Component {

  render() {
    return (
      <div className="container" style={{color: 'red'}}>
        <h6>An account with that email already exists</h6>
      </div>
    );
  }
}

export default FailedMessage;
