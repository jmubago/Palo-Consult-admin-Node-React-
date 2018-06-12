import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import './Enterprises.css'

class Enterprises extends Component{
    constructor(props){
        super(props);
        this.state={
            //error=null,
            get_enterprise: [],
            openFirstModal: false,
            openSecondModal: false,
            openThirdModal: false,
            RazonSocial: '',
            Direccion:'',
            EmailContacto:'',
            Telefono:'',
            IBAN:'',
            id:0,
            register: false
        };
        this.onOpenFirstModal = this.onOpenFirstModal.bind(this);
        this.onOpenSecondModal = this.onOpenSecondModal.bind(this);
        this.onOpenThirdModal = this.onOpenThirdModal.bind(this);
        // this.onCloseFirstModal = this.onCloseFirstModal.bind(this);
        this.onCloseSecondModal = this.onCloseSecondModal.bind(this);
        this.onCloseThirdModal = this.onCloseThirdModal.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    onOpenFirstModal (Enterprises) {
        this.setState({
            openFirstModal: true,
            RazonSocial: Enterprises.RazonSocial,
            Direccion: Enterprises.Direccion,
            EmailContacto: Enterprises.EmailContacto,
            Telefono: Enterprises.Telefono,
            IBAN: Enterprises.IBAN,
            id: Enterprises.id
        });
    }

    onOpenSecondModal (Enterprises){
        this.setState({
            openSecondModal: true
        });
        var data = {
            id: Enterprises.id
        }
        console.log(JSON.stringify(data));
        fetch('http://localhost:4000/api/deleteEnterprise/:id', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            // console.log("after delete JSON: ")
            if(data === "success"){ 
                this.setState({msg: "User has been deleted."});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    onOpenThirdModal(Enterprises){
        this.setState({
            openThirdModal: true,
            openFirstModal: false,
        });
        //console.log ("open third modal");
    }
    
    // onCloseFirstModal () {
    //     console.log("close modaaaaaaaal 1")
    //     this.setState({
    //         openFirstModal: false
    //     });
        
    // }

    onCloseSecondModal (){
        //console.log("close modaaaaaaaal 2")
        this.setState({
            openSecondModal: false
        });
        fetch("http://localhost:4000/api/get_enterprises")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_enterprise: result
                    });
                },
                (error)=>{
                    this.setState({
                        error: error
                });      
            })
    }

    onCloseThirdModal(){
        //console.log("close first and third modal")
        this.setState({
            openThirdModal: false,
        });
        fetch("http://localhost:4000/api/get_enterprises")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_enterprise: result
                    });
                },
                (error)=>{
                    this.setState({
                        error: error
                });      
            })

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
            //console.log("dataaaa: ", data)
        }).catch(err =>{
            console.log("Errorrrr:", err);
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            get_enterprise: nextProps.reloadEnterprise
        })
        //console.log("componentWillReceivePropsssssssss", this.state.get_enterprise);
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/get_enterprises")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_enterprise: result
                    });
                },
                (error)=>{
                    this.setState({
                        error: error
                });      
            })
    }

    render(){
        //console.log ("new Prooooops: ", this.props.reloadEnterprise);
        const { openFirstModal, openSecondModal, openThirdModal } = this.state;
        return(
            <div className="limiter">
                <div className="container-table100">
                    <div className="wrap-table100">
                            <div className="table100 ver2 m-b-110">
                                <div className="table100-head">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="cell100 column1">Enterprise</th>
                                                <th className="cell100 column2">Email</th>
                                                <th className="cell100 column3">Phone Number</th>
                                                <th className="cell100 column4">Address</th>
                                                <th className="cell100 column5">Bank account</th>
                                                <th className="cell100 column6">Sessions</th>
                                                <th className="cell100 column7">Candidates</th>
                                                <th className="cell100 column8">Action</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            <div className="table100-body js-pscroll">
                                <table>    
                                    <tbody>
                                        {this.state.get_enterprise.map(Enterprises=>
                                            <tr key={Enterprises.id} className="tr">
                                            <td className="cell100 column1">{Enterprises.RazonSocial}</td>
                                            <td className="cell100 column2">{Enterprises.EmailContacto}</td>
                                            <td className="cell100 column3">{Enterprises.Telefono}</td>
                                            <td className="cell100 column4">{Enterprises.Direccion}</td>
                                            <td className="cell100 column5">{Enterprises.IBAN}</td>
                                            <td className="cell100 column6">{Enterprises.TotalSessions}</td>
                                            <td className="cell100 column7">{Enterprises.NumberCandidates}</td>
                                            <td className="cell100 column8"><button button className="button-small button1" onClick={() => this.onOpenFirstModal(Enterprises)}>Edit</button>  |  <button button className="button-small button1" onClick={() => this.onOpenSecondModal(Enterprises)}>Delete</button></td>
                                            </tr>
                                        )}
                                        <Modal open={openFirstModal} onClose={this.onCloseFirstModal} contentLabel="Enterprise update" className="update-modal">
                                            <form onSubmit={this.handleEdit} method="POST">
                                                <div className="fieldset">
                                                    <label>Company name </label>
                                                    <input id="signup-companyName" className="input-register"  placeholder='Company name' name='companyName' ref={companyName=>this.companyName=companyName}/>
                                                </div>
                                                <div className="fieldset">
                                                    <label>Address </label>
                                                    <input id="signup-address" className="input-register"  placeholder='Address' name='address' ref={address=>this.address=address}/>
                                                </div>
                                                <div className="fieldset">
                                                    <label>Email </label>
                                                    <input id="signup-email" className="input-register" type="email"  placeholder='Email' name='email' ref={email=>this.email=email}/>
                                                </div>
                                                <div className="fieldset">
                                                    <label>Phone number </label>
                                                    <input id="signup-phoneNumber" className="input-register"  placeholder='Phone number' name='phoneNumber' ref={phoneNumber=>this.phoneNumber=phoneNumber}/>
                                                </div>
                                                <div className="fieldset">
                                                    <label>Bank account </label>
                                                    <input id="signup-bankAccount" className="input-register"  placeholder='Bank account' name='bankAccount' ref={bankAccount=>this.bankAccount=bankAccount}/>
                                                </div>
                                                <div className="submit-section">
                                                    <button onClick={() => this.onOpenThirdModal(Enterprises)} className="button-small button1">Submit</button>
                                                </div>
                                            </form>
                                        </Modal>
                                        <Modal open={openSecondModal} onClose={this.onCloseSecondModal} contentLabel="Enterprise update">
                                            <div>
                                                You have successfully deleted this enterprise
                                            </div>
                                        </Modal>
                                        <Modal open={openThirdModal} onClose={this.onCloseThirdModal} contentLabel="Enterprise update">
                                            <div>
                                                You have successfully updated this enterprise
                                            </div>
                                    </Modal>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}
export default Enterprises;