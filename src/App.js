import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  // Se importa desde la primera línea
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const textoSegunBool = this.props.boolean ? "Es cierto" : "Falso";
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{this.props.arrayOfNumbers.join(", ")}</p>
      </div>
    )
  }
}

function App() {

  //const Hello = (props) => <h2>{props.title}</h2>
  // Hello es una constante que tiene su propiedad, se coloca en el return de manera JSX utilizando como componente y agregando el valor del titulo ya que es su propiedad

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello 
          title = "Hello from props" 
        />
        <Text 
          arrayOfNumbers = {[4,6,7,8,3,1]}
          boolean
          text="Texto en String"
          number={3}
        />
      </header>
    </div>
  );
}

export default App;
