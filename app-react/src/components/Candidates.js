import React, {Component} from 'react';
import CandidatesCoach from '../components/candidatesCoach';
import CandidatesNoCoach from '../components/candidatesNoCoach';

class Candidates extends Component {
    render() {
      return (
        <div className="candidatesInfo">
          <div className="candidatesCoach">
            <CandidatesCoach/>
          </div>  
          <div className="candidatesNoCoach">
            <CandidatesNoCoach/>
          </div>
        </div>
      )
    }
  }
  
  export default Candidates;