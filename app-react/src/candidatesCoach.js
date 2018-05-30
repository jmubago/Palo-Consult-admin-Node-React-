import React, {Component} from 'react';

class CandidatesCoach extends Component{
    constructor(props){
        super(props);
        this.state={
            //error=null,
            get_candidateWithCoach: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/get_candidateWithCoach")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_candidateWithCoach: result
                    });
                },
                (error)=>{
                    this.setState({
                        error: error
                });
                  
            })
    }

    render(){
        //const {get_candidateWithCoach} = this.state;
        var map = this.state.get_candidateWithCoach;
        
        return(
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Candidates with Coach</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.get_candidateWithCoach.map(CandidateWithCoach=>
                                <tr key={CandidateWithCoach.id}>
                                <td>{CandidateWithCoach.candidatesWithCoach}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default CandidatesCoach;
    