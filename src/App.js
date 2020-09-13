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
    
    const {
      isActived,
      arrayOfNumbers,
      multiply,
      objectWithInfo
    } = this.props 

    const textoSegunBool = isActived ? "On" : "Off";
    const mappedNumbers = arrayOfNumbers.map(multiply);

   

    return (
      <div>
        <p>{this.props.arrayOfNumbers.join(", ")}</p>
        <p>{mappedNumbers.join(", ")}</p>
        <p>{this.props.objectWithInfo.key}</p>
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
          objectWithInfo={{ key: " first value", key: "Fausto" }}
          multiply={ number => number * 4}
          boolean
        />
      </header>
    </div>
  );
}

export default App;
