import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class AddCaptain extends Component {

  constructor() {
        super();
        this.state = {
            captain : {
                firstname: '',
                lastname: '',
                email: ''
        }
    }
  }

  handleSubmit(field, event){
    event.preventDefault();
        console.log ('start leaving');
        this.setState({identity:{submitted: true}});
        const { username, password } = this.state.identity;
        if ( username && password ){
            this.props.logOn(username, password);
  }
}

  updateLogonFields = (field, event) => {
         let captain = Object.assign({}, this.state.captain);
         captain[field] = event.target.value;
         this.setState({
             captain: captain
         })
     }

  addCaptain (captain){
    axios.request({
    method: 'post',
    url: 'https://evoint.herokuapp.com/user/addCaptain',
    data: captain,
    headers:{
      "Content-Type": "application/json",
    }
  }).then(response => {
    //push redirects the user to where ever we want to go to
    console.log ('response is  ' + response)
  }).catch(error => console.console.log('failed because of '+ error));
  }

  render() {
    return (
      <div className="row center">
        <a className="orange lighten-1 waves-effect waves-light btn modal-trigger" href="#modal1">Want to be a Captain</a>

        <div id="modal1" className="modal">
          <div className="modal-content">
          <h1>Enter your contact details</h1>
                              <div className="input-field col s6 ">
                                  <input id="username" type="text" className="validate" ref="username" style={{color: 'black'}}
                                         onChange={this.updateLogonFields.bind(this, 'username')}></input>
                                  <label htmlFor="username">username</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="password" type="password" className="validate" ref="password" style={{color: 'black'}}
                                         onChange={this.updateLogonFields.bind(this, 'password')}></input>
                                  <label htmlFor="password">Password</label>
                              </div>
                              <div className="input-field col s6">
                                  <input id="password" type="password" className="validate" ref="password" style={{color: 'black'}}
                                         onChange={this.updateLogonFields.bind(this, 'password')}></input>
                                  <label htmlFor="password">Password</label>
                              </div>
                              <div className="btn waves-effect waves-light btn-small">
                                  <button className="btn waves-effect waves-light btn-small" type="submit"
                                          name="action"
                                          onClick={this.handleSubmit.bind(this, 'handleSubmit')}>Login
                                  </button>
                        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCaptain;
