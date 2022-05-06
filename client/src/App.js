import React, { Component } from 'react';


import './App.css';
import Header from './components/Header';
import UserForm from './components/UserForm';

class App extends Component {

  
  
  render() {
    return (
      <div>
        <Header/><br/>
        <div className="col-lg-9 mx-auto text-center mt-5">
          <h1><b>Let's generate your Resume!</b></h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>  
        <UserForm/>
      </div>  
    );
  }
}

export default App;
