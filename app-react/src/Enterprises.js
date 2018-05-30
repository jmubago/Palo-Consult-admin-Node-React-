import React, {Component} from 'react';
import Modal from 'react-modal/lib/components/Modal';

class Enterprise extends Component{
    constructor(props){
        super(props);
        this.state={
            //error=null,
            get_enterprise: [],
            modalIsOpen: false,
            RazonSocial: '',
            Direccion:'',
            EmailContacto:'',
            Telefono:'',
            IBAN:'',
            id:0
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        //this.logChange = this.logChange.bind(this); // We capture the value and change state as user changes the value here.
        this.handleEdit = this.handleEdit.bind(this);
    }

    openModal(Enterprises) {
        this.setState({
            modalIsOpen: true,
            RazonSocial: Enterprises.RazonSocial,
            Direccion: Enterprises.Direccion,
            EmailContacto: Enterprises.EmailContacto,
            Telefono: Enterprises.Telefono,
            IBAN: Enterprises.IBAN,
            id: Enterprises.id
        });
    }
    
    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    handleEdit(event){
        event.preventDefault()
        var data = {
            RazonSocial: this.companyName.value,
            Direccion: this.address.value,
            EmailContacto: this.email.value,
            Telefono: this.phoneNumber.value,
            IBAN: this.bankAccount.value,
            id: this.state.id
        }
        fetch('http://localhost:4000/api/updateEnterprise',{
            method: 'PUT',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response){
            if(response.status >= 400){
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data){
            console.log("dataaaa: ", data)
        }).catch(err =>{
            console.log("Errorrrr:", err);
        })
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
                                <td><button onClick={() => this.openModal(Enterprises)}>Edit</button>|<button>Delete</button></td>
                                </tr>
                            )}
                            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Enterprise update">
                                <form onSubmit={this.handleEdit} method="POST">
                                    <div>
                                        <label>Company name </label>
                                        <input  className="form-control"  placeholder='Company name' name='companyName' ref={companyName=>this.companyName=companyName}/>
                                    </div>
                                    <div>
                                        <label>Address </label>
                                        <input  className="form-control"  placeholder='VAT Number' name='vatNumber' ref={address=>this.address=address}/>
                                    </div>
                                    <div>
                                        <label>Email </label>
                                        <input  className="form-control"  placeholder='VAT Number' name='vatNumber' ref={email=>this.email=email}/>
                                    </div>
                                    <div>
                                        <label>Phone number </label>
                                        <input  className="form-control"  placeholder='VAT Number' name='vatNumber' ref={phoneNumber=>this.phoneNumber=phoneNumber}/>
                                    </div>
                                    <div>
                                        <label>Bank account </label>
                                        <input  className="form-control"  placeholder='VAT Number' name='vatNumber' ref={bankAccount=>this.bankAccount=bankAccount}/>
                                    </div>
                                    <div className="submit-section">
                                        <button className="btn btn-uth-submit">Submit</button>
                                    </div>
                                </form>
                            </Modal>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Enterprise;