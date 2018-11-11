import React, { Component } from 'react';
import './App.css';
import EditProfileController from "./profileScreen/EditProfileController";

class App extends Component {
  render() {
    return (
      <div className="App">
       <EditProfileController classname="Profile"/>
      </div>
    );
  }
}

export default App;
