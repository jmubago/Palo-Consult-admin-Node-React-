import React, {Component} from 'react';
import './CandidatesNoCoach.css'

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
            <div className="container-table200">
                <div className="wrap-table400">
                    <div className="table200 ver2 m-b-110">
                        <div className="table200-head">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cell100 column1-2">Candidates without Coach</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table200-body js-pscroll">
                            <table>
                                <tbody>
                                    {this.state.get_candidateWithOutCoach.map(CandidateWithOutCoach=>
                                        <tr key={CandidateWithOutCoach.id} className="tr">
                                            <td className="cell100 column1-2">{CandidateWithOutCoach.candidatesWithOutCoach}</td>
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
export default CandidatesNoCoach;
    