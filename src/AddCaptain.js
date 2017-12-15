import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FailedMessage from './FailedMessage';
import SuccessMessage from './SuccessMessage'

class AddCaptain extends Component {

  constructor() {
        super();
        this.state = {
            captain : {
                firstname: '',
                lastname: '',
                email: '',
                errors: {
                  firstNameFieldErrors: false,
                  lastNameFieldErrors: false,
                  emailFieldErrors: false
                },
                isSuccess: false,
                isFailure: false,
                message: ''
        }
    }
  }

  updateLogonFields = (field, event) => {
      let captain = Object.assign({}, this.state.captain);
        captain [field] = event.target.value;
          this.setState({
              captain: captain
              })
          }

     handleSubmit = (event) => {
       if (!this.canBeSubmitted()){
         event.preventDefault();
         return
       }
      this.addCaptain(this.state.captain);
     }

     canBeSubmitted() {
       const { firstname, lastname, email } = this.state.captain;
       return (
          firstname.length > 3 &&
          firstname.length < 20 &&
          lastname.length > 3 &&
          lastname.length < 20 &&
          email.length > 5  &&
          email.length < 20 &&
          this.validateEmail(email)
        );
     }

     handleErrorMessage (){

     }

    validateEmail(email) {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(email.toLowerCase());
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
     console.log ('response is '+ response.status)
     if (response.status === 200){
        console.log ('in here')
       this.setState(
         captain : {
             isSuccess: true,
             isFailure: false
         }
       )
     } else if (response.status === 401){
       this.setState(
         captain : {
             isSuccess: false,
             isFailure: true,
             message: response.message
         }
       )
     }
  }).catch(error =>
    this.setState(
      captain : {
        isSuccess: false,
        isFailure: true
      }
    )
  )
  }


  render() {

    const isEnabled = this.canBeSubmitted();
    const { isSuccess, isFailure } = this.state.captain;

    console.log ('success is  ' + isSuccess + ' ' + isFailure)

    return (
      <div className="row center">
        <a className="orange lighten-1 waves-effect waves-light btn modal-trigger" href="#modal1">Want to be a Captain</a>
        <div id="modal1" className="modal">
          <div className="modal-content">
          <h4>Enter your contact details</h4>

          { isSuccess &&  <SuccessMessage /> }
          { isFailure &&  <FailedMessage /> }

            <div className="input-field col s12 ">
                <input id="firstname" type="text" className="validate error" ref="firstname" style={{color: 'black'}}
                       onChange={this.updateLogonFields.bind(this, 'firstname')}></input>
                <label htmlFor="firstname">First Name</label>
            </div>
            <div className="input-field col s12">
                <input id="lastname" type="text" className="validate error" ref="lastname" style={{color: 'black'}}
                       onChange={this.updateLogonFields.bind(this, 'lastname')}></input>
                <label htmlFor="lastname">Last Name</label>
            </div>
            <div className="input-field col s12">
                <input id="email" type="email" className="validate error" ref="email" style={{color: 'black'}}
                       onChange={this.updateLogonFields.bind(this, 'email')}></input>
                <label htmlFor="email" data-error="Enter your email in the correct format">Email</label>
            </div>
          <br/>
          <br/>
            <div className="container">
              <button className="orange lighten-1 waves-effect waves-light btn" type="submit"
                        name="action"
                        onClick={this.handleSubmit.bind(this, 'handleSubmit')}
                        disabled={ !isEnabled && isFailure }>Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default AddCaptain;
