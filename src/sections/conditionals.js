import React, { Component } from "react";

class LoginButton extends Component {
    render() {
        return (
            <button>Iniciar Sesión</button>
        )
    }
}

class LogOutButton extends Component {
    render() {
        return (
            <div>
                <h3>Bienvenido User!</h3>
            <button>Cerrar Sesión</button>
            </div>
            
        )
    }
}

// Se simplificó el código de manera que la funcion ternaria se indicó abajo en el return de la class ConditionalSection, para esto se elimino la funcion que daba como retorno un if/else para indicar si el valor era verdadero enviara al componente A y viceversa si era el componente B

// Actualizamos el ejemplo para hacer una referencia que indique como seria un ejemplo real haciendo inicio de sesion en alguna plafaforma.

export default class ConditionalSection extends Component {
    constructor() {
        super();
        this.state = { mostrarA: false}
    }
    render () {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.mostrarA ? 
                <LoginButton/> 
                : <LogOutButton/>}
            </div>
        )
    }
}