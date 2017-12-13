import React, { Component } from 'react';
import './App.css';

class BodyContent extends Component {

  render() {
    return (
      <div className="container">
        <div className="section">

          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Take our Country back</h5>

                <p className="light">We need send our government in the right direction in the 2018 elections. To do that we must create an unprecedented wave of votes</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                <h5 className="center">Community based mobilization</h5>

                <p className="light">We each need to get people we know and trust to vote, without fail though Captains.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                <h5 className="center">Easy to work with</h5>

                <p className="light">The simple goal of BeTheWave is to help you spend two minutes a day getting your people ready</p>
              </div>
            </div>

          </div>
          </div>

        </div>
    );
  }
}

export default BodyContent;
