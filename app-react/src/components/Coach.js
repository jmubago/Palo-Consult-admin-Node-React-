import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import './Coach.css'

class Coach extends Component{
    constructor(props){
        super(props);
        this.state={
            //error=null,
            get_coach: [],
            openFirstModal: false,
            openSecondModal:false,
            openThirdModal:false
        };
        this.onOpenFirstModal = this.onOpenFirstModal.bind(this);
        this.onOpenSecondModal = this.onOpenSecondModal.bind(this);
        this.onOpenThirdModal = this.onOpenThirdModal.bind(this);
        // this.onCloseFirstModal = this.onCloseFirstModal.bind(this);
        this.onCloseSecondModal = this.onCloseSecondModal.bind(this);
        this.onCloseThirdModal = this.onCloseThirdModal.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    onOpenFirstModal(Coach){
        this.setState({
            openFirstModal: true,
            Nombre: Coach.Nombre,
            Apellido: Coach.Apellido,
            Email: Coach.EmailContacto,
            Telefono: Coach.Telefono,
            Iban: Coach.IBAN,
            id: Coach.id
        });
        //console.log ("open first modal");
    }

    onOpenSecondModal(Coach){
        this.setState({
            openSecondModal: true,
        });
        var data = {
            id: Coach.id
        }
        //console.log(JSON.stringify(data));
        fetch('http://localhost:4000/api/deleteCoach', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            if(data === "success"){
               this.setState({msg: "User has been deleted."});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    onOpenThirdModal(Coach){
        this.setState({
            openThirdModal: true,
            openFirstModal: false,
        });
       // console.log ("open third modal");
    }

    // onCloseFirstModal(){
    //     console.log ("close first modal");
    //     this.setState({
    //         openFirstModal: false,
    //     });
    // }

    onCloseSecondModal(){
        //console.log("close second modal")
        this.setState({
            openSecondModal: false
        });
        fetch("http://localhost:4000/api/get_coach")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_coach: result
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
        fetch("http://localhost:4000/api/get_coach")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_coach: result
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
        var data={
            Nombre: this.coachName.value,
            Apellido: this.coachLastname.value,
            Email: this.email.value,
            Telefono: this.phoneNumber.value,
            Iban: this.bankAccount.value,
            id: this.state.id
        }
        fetch('http://localhost:4000/api/updateCoach',{
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

    componentWillReceiveProps(nextProps) {
        this.setState({
            get_coach: nextProps.reloadCoach
        })
        //console.log("componentWillReceivePropsssssssss", this.state.get_coach);
    }

    componentDidMount() {
        fetch("http://localhost:4000/api/get_coach")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_coach: result
                    });
                },
                (error)=>{
                    this.setState({
                        error: error
                });
                  
            })
    }

    render(){
        const { openFirstModal, openSecondModal, openThirdModal } = this.state;
        return(
            <div className="container-table200">
                <div className="wrap-table200">
                    <div className="table200 ver2 m-b-110">
                        <div className="table200-head">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cell100 column1-1">Coach</th>
                                        <th className="cell100 column2-1">Email</th>
                                        <th className="cell100 column3-1">Phone Number</th>
                                        <th className="cell100 column4-1">Bank account</th>
                                        <th className="cell100 column5-1">Sessions</th>
                                        <th className="cell100 column6-1">Candidates</th>
                                        <th className="cell100 column7-1">Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table200-body js-pscroll">
                            <table>
                                <tbody >
                                    {this.state.get_coach.map(Coach=>
                                        <tr key={Coach.id} className="tr">
                                        <td className="cell100 column1-1">{Coach.Nombre} {Coach.Apellido}</td>
                                        <td className="cell100 column2-1">{Coach.EmailContacto}</td>
                                        <td className="cell100 column3-1">{Coach.Telefono}</td>
                                        <td className="cell100 column4-1">{Coach.IBAN}</td>
                                        <td className="cell100 column5-1">{Coach.TotalSessions}</td>
                                        <td className="cell100 column6-1">{Coach.NumberCandidates}</td>
                                        <td className="cell100 column7-1"><button className="button-small button1"  onClick={() => this.onOpenFirstModal(Coach)}>Edit</button> | <button className="button-small button1" onClick={() => this.onOpenSecondModal(Coach)}>Delete</button></td>
                                        </tr>
                                    )}
                                    <Modal  open={openFirstModal} onClose={this.onCloseFirstModal} contentLabel="Enterprise update" className="update-modal">
                                        <form onSubmit={this.handleEdit} method="POST">
                                            <div className="fieldset">
                                                <label>Coach name </label>
                                                <input  className="input-register"  placeholder='Coach name' name='companyName' ref={coachName=>this.coachName=coachName}/>
                                            </div>
                                            <div className="fieldset">
                                                <label>Coach lastname  </label>
                                                <input  className="input-register"  placeholder='Coach last name' name='vatNumber' ref={coachLastname=>this.coachLastname=coachLastname}/>
                                            </div>
                                            <div className="fieldset">
                                                <label>Email </label>
                                                <input  className="input-register"  placeholder='Email' name='vatNumber' ref={email=>this.email=email}/>
                                            </div>
                                            <div className="fieldset">
                                                <label>Phone number </label>
                                                <input  className="input-register"  placeholder='Phone number' name='vatNumber' ref={phoneNumber=>this.phoneNumber=phoneNumber}/>
                                            </div>
                                            <div className="fieldset">
                                                <label>Bank account </label>
                                                <input  className="input-register"  placeholder='Bank account' name='vatNumber' ref={bankAccount=>this.bankAccount=bankAccount}/>
                                            </div>
                                            <div className="submit-section">
                                                <button className="button-small button1" onClick={() => this.onOpenThirdModal(Coach)}>Submit</button>
                                            </div>
                                        </form>
                                    </Modal>
                                    <Modal open={openSecondModal} onClose={this.onCloseSecondModal} contentLabel="Enterprise update">
                                            <div>
                                                You have successfully deleted this coach
                                            </div>
                                    </Modal>
                                    <Modal open={openThirdModal} onClose={this.onCloseThirdModal} contentLabel="Enterprise update">
                                            <div>
                                                You have successfully updated this coach
                                            </div>
                                    </Modal>
                                </tbody>
                            </table>
                        </div>  
                    </div>      
                </div>
            </div>
        )
    }
}
export default Coach;