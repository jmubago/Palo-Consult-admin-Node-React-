import React, {Component} from 'react';

class Enterprise extends Component{
    constructor(props){
        super(props);
        this.state={
            //error=null,
            get_enterprise: []

        };
    }

    
    componentDidMount() {
        fetch("http://localhost:4000/api/get_enterprises")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_enterprise: result
                    });
                    //console.log("result: ",this.state.get_enterprise);
                    //console.log(result);
                },
                (error)=>{
                    this.setState({
                        error: error
                });
                  
            })
    }

    // shouldComponentUpdate(nextProps){
    //     console.log("new elementtttt")
    //     fetch("http://localhost:4000/api/get_enterprises")
    //         .then(res => res.json())
    //         .then(
    //             (newResult)=>{
    //                 console.log ("new result:  ", newResult);
    //                 this.setState({
    //                     get_enterprise: newResult
    //                 });
    //                 //console.log("newresult: ",this.state.get_enterprise);
    //                 //console.log(newresult);
    //             },
    //             (error)=>{
    //                 this.setState({
    //                     error: error
    //             });
                  
    //         })
    //     return true;
    // }

    render(){
        return(
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Enterprise</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Bank account</th>
                                <th>Sessions</th>
                                <th>Candidates</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.get_enterprise.map(Enterprises=>
                                <tr key={Enterprises.id}>
                                <td>{Enterprises.RazonSocial}</td>
                                <td>{Enterprises.EmailContacto}</td>
                                <td>{Enterprises.Telefono}</td>
                                <td>{Enterprises.Direccion}</td>
                                <td>{Enterprises.IBAN}</td>
                                <td>{Enterprises.TotalSessions}</td>
                                <td>{Enterprises.NumberCandidates}</td>
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
export default Enterprise;