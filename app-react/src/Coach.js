import React, {Component} from 'react';

class Coach extends Component{
    constructor(props){
        super(props);
        this.state={
            //error=null,
            get_coach: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/get_coach")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_coach: result
                    });
                    //console.log("result: ",this.state.get_coach);
                    //console.log(result);
                },
                (error)=>{
                    this.setState({
                        error: error
                });
                  
            })
    }

    render(){
        //const {get_candidateWithCoach} = this.state;
        var map = this.state.get_coach;
        //console.log("map Coachhh : ",map);
        //console.log("RENDER");
        
        return(
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Coach</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Bank account</th>
                                <th>Sessions</th>
                                <th>Candidates</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.get_coach.map(Coach=>
                                <tr key={Coach.id}>
                                <td>{Coach.Nombre} {Coach.Apellido}</td>
                                <td>{Coach.EmailContacto}</td>
                                <td>{Coach.Telefono}</td>
                                <td>{Coach.IBAN}</td>
                                <td>{Coach.TotalSessions}</td>
                                <td>{Coach.NumberCandidates}</td>
                                <td><button>Edit</button>|<button>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Coach;