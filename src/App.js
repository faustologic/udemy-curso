import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditionals';



function App() {

  //const Hello = (props) => <h2>{props.title}</h2>
  // Hello es una constante que tiene su propiedad, se coloca en el return de manera JSX utilizando como componente y agregando el valor del titulo ya que es su propiedad

  return (
    <div className="App">
     <ConditionalSection />
    </div>
  );
}

export default App;
