import React, {Component} from 'react';

class CandidatesNoCoach extends Component{
    constructor(props){
        super(props);
        this.state={
            //error=null,
            get_candidateWithOutCoach: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/get_candidateWithOutCoach")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_candidateWithOutCoach: result
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
        var map = this.state.get_candidateWithOutCoach;
        
        return(
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Candidates without Coach</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.get_candidateWithOutCoach.map(CandidateWithOutCoach=>
                                <tr key={CandidateWithOutCoach.id}>
                                <td>{CandidateWithOutCoach.candidatesWithOutCoach}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default CandidatesNoCoach;
    