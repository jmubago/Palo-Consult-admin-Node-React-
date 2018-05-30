import React, {Component} from 'react';
import Modal from 'react-modal/lib/components/Modal';
import Coach from './Coach'
import './RegistrationCoach.css';

class RegistrationCoach extends Component{
    constructor(props){
        super(props)
        this.state={
            Nombre: '',
            Apellido: '',
            Email: '',
            Password:'',
            Telefono:'',
            Iban:'',
            Idioma:'',
            update:[],
            modalIsOpen: false,
            register: false,
            get_coach: [],
        }
        console.log("this stateeeeeeeeeeeeeeeeeeeeeeee: ",this.state);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal(){
        this.setState({
            modalIsOpen: true,
            Nombre: '',
            Apellido: '',
            Email: '',
            Password:'',
            Telefono:'',
            Iban:'',
            Idioma:'',
            register: false,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {
            Nombre: this.nameCoach.value,
            Apellido: this.lastName.value,
            Email: this.email.value,
            Password:this.password.value,
            Telefono:this.phoneNumber.value,
            Iban:this.bankAccount.value,
            Idioma:this.language.value,
            register: false,
            
        }; 
        
        console.log("JSONNNNNNNNNNN: ",JSON.stringify(data));
        fetch("http://localhost:4000/api/createCoach", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            // console.log("responde.json()",response.json());
            return response.json();
        }).catch(function(err) {
            console.log(err)
        });
    }
    
    closeModal(){
        this.setState({
            modalIsOpen: false,
        });
        fetch("http://localhost:4000/api/get_coach")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_coach: result
                    });
                    // console.log("reloadEnterprise this.state.get_enterprise: ",this.state.get_enterprise);
                    // console.log("reloadEnterprise result: ",result);
                },
                (error)=>{
                    this.setState({
                        error: error
                });
                  
            })
    }

    render() {
        return (
            <div>
                
                <Coach reloadCoach={this.state.get_coach}/>
                <button className="button button1 button-coach" onClick={() => this.openModal()}>Register new coach</button>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Register Enterprise">
                    <div className="user-modal">
                        <div className="user-modal-container">
                            <div id="signup">
                                <form onSubmit={this.handleSubmit} method="POST" className="form">
                                    <p className="fieldset">
                                        <label>Name </label>
                                        <input id="signup-companyName" className="full-width has-padding has-border" placeholder='Company name' name='nameCoach' ref={nameCoach=>this.nameCoach=nameCoach}/>
                                    </p>
                                    <p className="fieldset">
                                        <label>Last name </label>
                                        <input id="signup-vatNumber" className="full-width has-padding has-border"  placeholder='VAT Number' name='lastName' ref={lastName=>this.lastName=lastName}/>
                                        </p>
                                    <p className="fieldset">
                                        <label>Language </label>
                                        <select id="signup-country" className="full-width has-padding has-border"  name='language' ref={language=>this.language=language}>
                                            <option value="1">Spanish</option>
                                            <option value="2">French</option>
                                            <option value="3">English</option>
                                            <option value="4">German</option>
                                            <option value="5">Dutch</option>
                                            <option value="6">Japanese</option>
                                        </select>
                                    </p>
                                    <p className="fieldset">
                                        <label>Email </label>
                                        <input  id="signup-email" className="full-width has-padding has-border" type="email"  placeholder='Email' name='email' ref={email=>this.email=email}/>
                                    </p>
                                    <p className="fieldset">
                                        <label>Password </label>
                                        <input  id="signup-password" className="full-width has-padding has-border" type="password" placeholder='Password' name='password' ref={password=>this.password=password}/>
                                    </p>
                                    <p className="fieldset">
                                        <label>Phone number </label>
                                        <input  id="signup-phoneNumber" className="full-width has-padding has-border"  placeholder='Phone number' name='phoneNumber' ref={phoneNumber=>this.phoneNumber=phoneNumber}/>
                                    </p>
                                    <p className="fieldset">
                                        <label>Bank account </label>
                                        <input  id="signup-bankAccount" className="full-width has-padding has-border"  placeholder='Bank account' name='bankAccount' ref={bankAccount=>this.bankAccount=bankAccount}/>
                                    </p>
                                    <p className="fieldset">
                                        <button className="">Submit</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>        
                </Modal>
            </div>    
        );
    }
}

export default RegistrationCoach;