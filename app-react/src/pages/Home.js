import React, { Component } from 'react'
import RegistrationCoach from '../components/RegistrationCoach'
import RegistrationEnterprises from '../components/RegistrationEnterprises'
import Candidates from '../components/Candidates'
import Header from '../components/Header'


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Candidates/>
        <RegistrationCoach/>
        <RegistrationEnterprises/>
      </div>
    )
  }
}

export default Home;