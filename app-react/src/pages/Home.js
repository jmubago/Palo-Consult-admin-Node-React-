import React, { Component } from 'react'
import logo from '../logo.svg'
import RegistrationCoach from '../components/RegistrationCoach'
import RegistrationEnterprises from '../components/RegistrationEnterprises'
import Candidates from '../components/Candidates'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Candidates/>
        <RegistrationCoach/>
        <RegistrationEnterprises/>
      </div>
    )
  }
}

export default Home;