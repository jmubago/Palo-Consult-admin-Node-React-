import React, {Component} from 'react';
import Modal from 'react-modal';

class Registration1 extends Component{
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
            IBAN:''
        }
        console.log("this stateeeeeeeeeeeeeeeeeeeeeeee: ",this.state);
        this.handleSubmit = this.handleSubmit.bind(this)
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
        }
        
        console.log("JSONNNNNNNNNNN: ",JSON.stringify(data));
        
        
        fetch("http://localhost:4000/api/createEnterprise", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).catch(function(err) {
            console.log(err)
        });
    }


    render() {
        return (
            <div className="container register-form">
                <div>
                    Registration 01
                </div>
                <form onSubmit={this.handleSubmit} method="POST">
                    <div>
                        <label>Company name </label>
                        <input  className="form-control"  placeholder='Company name' name='companyName' ref={companyName=>this.companyName=companyName}/>
                    </div>
                    <div>
                        <label>VAT Number </label>
                        <input  className="form-control"  placeholder='VAT Number' name='vatNumber' ref={vatNumber=>this.vatNumber=vatNumber}/>
                    </div>
                    <div>
                        <label>Activity </label>
                        <select className="actividadSelec"  name='activity 'ref={activity=>this.activity=activity}>
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
                    </div>
                    <div>
                        <label>Country </label>
                        <select className="paisSelec"  name='country' ref={country=>this.country=country}>
                            <option value="1">Spain</option>
                            <option value="2">France</option>
                            <option value="3">United States</option>
                            <option value="4">Canada</option>
                            <option value="5">UK</option>
                            <option value="6">Germany</option>
                            <option value="7">Holland</option>
                            <option value="8">Japan</option>
                        </select>
                    </div>
                    <div>
                        <label>Address </label>
                        <input  className="form-control"  placeholder='Address' name='address' ref={address=>this.address=address}/>
                    </div>
                    <div>
                        <label>Email </label>
                        <input  className="form-control"  placeholder='Email' name='email' ref={email=>this.email=email}/>
                    </div>
                    <div>
                        <label>Password </label>
                        <input  className="form-control"  placeholder='Password' name='password' ref={password=>this.password=password}/>
                    </div>
                    <div>
                        <label>Phone number </label>
                        <input  className="form-control"  placeholder='Phone number' name='phoneNumber' ref={phoneNumber=>this.phoneNumber=phoneNumber}/>
                    </div>
                    <div>
                        <label>Contact Person </label>
                        <input  className="form-control"  placeholder='Contact Person' name='contactPerson' ref={contactPerson=>this.contactPerson=contactPerson}/>
                    </div>
                    <div>
                        <label>Bank account </label>
                        <input  className="form-control"  placeholder='Bank account' name='bankAccount' ref={bankAccount=>this.bankAccount=bankAccount}/>
                    </div>
                    <div className="submit-section">
                        <button className="btn btn-uth-submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration1;