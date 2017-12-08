import React, { Component } from 'react';
import './App.css';

class login extends Component {
  render() {
    return (
      <div class="container">
        <form class="col s12 m2">
        <p class="z-depth-1">z-depth-1</p>
          <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate">
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
    </form>
  </div>
    );
  }
}

export default login;
