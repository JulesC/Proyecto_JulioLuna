import React, { Component } from 'react';
import { MenuItems } from '../jsx/MenuItems'
import { Button } from '../jsx/Button'
import imagenes from './imagenes';
import '../css/Navbar.css'

class Navbar extends Component {
    state = {clicked: false}
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className="navbar-logo"><img src={ imagenes.img1} id="logoNav" /></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}                 
                </ul>
                <Button onClick={this.saludo}>Sign Up</Button>
            </nav>
        )
        
    }
    saludo() {
        alert('Por favor haz click en el botón!');
        Swal.fire(
            'Buen Trabajo!',
            'Gracias por clickear!',
            'success'
          )
    }
}

export default Navbar