import React, {Component} from 'react';
import './CandidatesCoach.css'

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
            <div className="container-table300">
                <div className="wrap-table300">
                    <div className="table200 ver2 m-b-110">
                        <div className="table200-head">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cell100 column1-2">Candidates with Coach</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table200-body js-pscroll">
                            <table>
                                <tbody>
                                    {this.state.get_candidateWithCoach.map(CandidateWithCoach=>
                                        <tr key={CandidateWithCoach.id} className="tr">
                                            <td className="cell100 column1-2">{CandidateWithCoach.candidatesWithCoach}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}
export default CandidatesCoach;
    