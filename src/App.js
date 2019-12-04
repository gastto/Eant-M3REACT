import React, { Component } from 'react'
import './App.css'
import Logo from './components/Logo'
import Menu from './components/menu'
import Mapa from './components/mapa'
import Video from './components/video/Video'
import Gondola from './components/Gondola/index'

const links = [
  { url: "https://reactjs.org", blank: true, text: "Documentation" },
  { url: "https://reactjs.org/tutorial/tutorial.html", blank: "false", text:"Tutorial" },
  { url: "https://angular.io/docs", blank: "true", text:"The dark side of the JS" }
]

// desafio 4
// Traer los datos de la API desde APP y usarlos para <Producto />


class App extends Component {

  constructor(){
    super()
      this.state = {
        isLoaded : false
    }
  }
    componentDidMount(){
      //fetch(OBTENCION).then(CONVERSION).then(UTILIZACION)
      fetch("https://api.myjson.com/bins/1giaf3")
      .then(rta => rta.json())
      .then( data => {
        this.setState({ productos : data, isLoaded: true })
      })
    }



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Logo category="sports" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <Menu items={links} />
          <Mapa lat="-15.6078602" long="-42.383111" zoom="11900" />
          <Video id="3B_TQrcgSDo" play="no" />

        {/* Desafio V:
          Crear los X productos segun cant. de items + asignacion de datos al componente Producto
        */}

        { !this.state.isLoaded ? <p>Cargando</p> : <Gondola productos={this.state.productos} /> }


        </header>
      </div>
    );
  }
}

export default App;


