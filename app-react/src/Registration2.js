import React, {Component} from 'react';


class Registration2 extends Component{
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
            RazonSocial: this.state.RazonSocial,
            CIF: this.state.CIF,
            Actividad: this.state.Actividad,
            Pais: this.state.Pais,
            Direccion: this.state.Direccion,
            EmailContacto: this.state.EmailContacto,
            Clave: this.state.Clave,
            Telefono: this.state.Telefono,
            PersonaContacto: this.state.PersonaContacto,
            IBAN: this.state.IBAN,
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

    logChange(event) {
        console.log("eventttttttt: ",event);
        console.log("event.target.name: ", [event.target.name]);
        console.log("event.target.value: ", event.target.value);
        this.setState({[event.target.name]: event.target.value});  
        //const target = e.target;
    }

    render() {
        return (
            <div className="container register-form">
                <form onSubmit={this.handleSubmit} method="POST">
                    <div>
                        <label>Company name </label>
                        <input onChange={this.logChange} value='' className="form-control" placeholder='Company name' name='RazonSocial'/>
                    </div>
                    <div>
                        <label>VAT Number </label>
                        <input onChange={this.logChange} value={this.state.value} className="form-control"  placeholder='VAT Number' name='CIF'/>
                    </div>
                    <div>
                        <label>Activity </label>
                        <select onChange={this.logChange} className="actividadSelec"  name='Actividad '>
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
                        <select onChange={this.logChange} className="paisSelec"  name='Pais'>
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
                        <input onChange={this.logChange} value={this.state.value} className="form-control"  placeholder='Address' name='Direccion'/>
                    </div>
                    <div>
                        <label>Email </label>
                        <input onChange={this.logChange} value={this.state.value} className="form-control"  placeholder='Email' name='EmailContacto'/>
                    </div>
                    <div>
                        <label>Password </label>
                        <input onChange={this.logChange} value={this.state.value} className="form-control"  placeholder='Password' name='Clave'/>
                    </div>
                    <div>
                        <label>Phone number </label>
                        <input onChange={this.logChange} value={this.state.value} className="form-control"  placeholder='Phone number' name='Telefono'/>
                    </div>
                    <div>
                        <label>Contact Person </label>
                        <input onChange={this.logChange} value={this.state.value} className="form-control"  placeholder='Contact Person' name='PersonaContacto'/>
                    </div>
                    <div>
                        <label>Bank account </label>
                        <input onChange={this.logChange} value={this.state.value} className="form-control"  placeholder='Bank account' name='IBAN'/>
                    </div>
                    <div className="submit-section">
                        <button className="btn btn-uth-submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registration2;