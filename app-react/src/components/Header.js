import React, {Component} from 'react';
import logo from '../logo.png'
import './Header.css'

class Header extends Component{

    render(){
        return(
            <header className="Header">
                <img src={logo} alt="Palo consult" className="Logo"/>
                <p>Administration panel</p>
            </header>
        )
    }
}
export default Header;