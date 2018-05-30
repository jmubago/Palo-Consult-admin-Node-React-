import React, {Component} from 'react';
import Modal from 'react-modal/lib/components/Modal';
import Enterprise from './Enterprises'
import './RegistrationEnterprises.css';

class RegistrationEnterprises extends Component{
    constructor(props){
        super(props)
        this.state={
            RazonSocial: '',
            CIF: '',
            Actividad: '',
            Pais:'',
            Direccion:'',
            EmailContacto:'',
            Clave:'',
            Telefono:'',
            PersonaContacto:'',
            IBAN:'',
            update:[],
            modalIsOpen: false,
            register: false,
            get_enterprise: [],
        }
        console.log("this stateeeeeeeeeeeeeeeeeeeeeeee: ",this.state);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal(){
        this.setState({
            modalIsOpen: true,
            RazonSocial: '',
            CIF: '',
            Actividad: '',
            Pais:'',
            Direccion:'',
            EmailContacto:'',
            Clave:'',
            Telefono:'',
            PersonaContacto:'',
            IBAN:'',
            register: false,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {
            RazonSocial: this.companyName.value,
            CIF: this.vatNumber.value,
            Actividad: this.activity.value,
            Pais: this.country.value,
            Direccion: this.address.value,
            EmailContacto: this.email.value,
            Clave: this.password.value,
            Telefono: this.phoneNumber.value,
            PersonaContacto: this.contactPerson.value,
            IBAN: this.bankAccount.value,
        }; 
        
        console.log("JSONNNNNNNNNNN: ",JSON.stringify(data));
        fetch("http://localhost:4000/api/createEnterprise", {
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
        fetch("http://localhost:4000/api/get_enterprises")
            .then(res => res.json())
            .then(
                (result)=>{
                    this.setState({
                        get_enterprise: result
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
                {/* <Enterprise reloadEnterprise={this.state.get_enterprise}/> */}
                <Enterprise reloadEnterprise={this.state.get_enterprise}/>
                <button className="button button1 button-enterprises" onClick={() => this.openModal()}>Register new enterprise</button>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Register Enterprise">
                    <div className="user-modal">
                        <div className="user-modal-container">
                            <div id="signup">
                                <form onSubmit={this.handleSubmit} method="POST" className="form">
                                    <p className="fieldset">
                                        <label>Company name </label>
                                        <input id="signup-companyName" className="full-width has-padding has-border" placeholder='Company name' name='companyName' ref={companyName=>this.companyName=companyName}/>
                                    </p>
                                    <p className="fieldset">
                                        <label>VAT Number </label>
                                        <input id="signup-vatNumber" className="full-width has-padding has-border"  placeholder='VAT Number' name='vatNumber' ref={vatNumber=>this.vatNumber=vatNumber}/>
                                        </p>
                                    <p className="fieldset">
                                        <label>Activity </label>
                                        <select id="signup-activity" className="full-width has-padding has-border"  name='activity 'ref={activity=>this.activity=activity}>
                                            <option value="1">Architecture and urbanism</option>
                                            <option value="2">Food Industry</option>
                                            <option value="3">Automotion industry</option>
                                            <option value="4">Airspace industry</option>
                                            <option value="5">Banking</option>
                                            <option value="6">Biotechnology</option>
                                            <option value="7">Chemistry</option>
                                            <option value="8">Software Development</option>
                                            <option value="9">Gaming</option>
                                            <option value="10">Gambling</option>
                                            <option value="11">Health Care</option>
                                            <option value="12">Energy Industry</option>
                                            <option value="13">Construction Industry</option>
                                        </select>
                                    </p>
                                    <p className="fieldset">
                                        <label>Country </label>
                                        <select id="signup-country" className="full-width has-padding has-border"  name='country' ref={country=>this.country=country}>
                                            <option value="1">Spain</option>
                                            <option value="2">France</option>
                                            <option value="3">United States</option>
                                            <option value="4">Canada</option>
                                            <option value="5">UK</option>
                                            <option value="6">Germany</option>
                                            <option value="7">Holland</option>
                                            <option value="8">Japan</option>
                                        </select>
                                    </p>
                                    <p className="fieldset">
                                        <label>Address </label>
                                        <input  id="signup-address" className="full-width has-padding has-border"  placeholder='Address' name='address' ref={address=>this.address=address}/>
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
                                        <label>Contact Person </label>
                                        <input  id="signup-contactPerson" className="full-width has-padding has-border"  placeholder='Contact Person' name='contactPerson' ref={contactPerson=>this.contactPerson=contactPerson}/>
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

export default RegistrationEnterprises;