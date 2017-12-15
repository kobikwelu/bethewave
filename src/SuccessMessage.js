import React, { Component } from 'react';


class SuccessMessage extends Component {

  render() {
    return (
      <div className="container" style={{color: 'green'}}>
        <h6>Successfully created</h6>
        <h6>You will be notified when we are live</h6>
      </div>
    );
  }
}

export default SuccessMessage;
