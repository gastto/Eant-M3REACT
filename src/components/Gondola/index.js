import React from 'react'

class Gondola extends React.Component {

    //1) antes de nacer el componente
    constructor(){
        super()
        this.state = {
            isLoaded: false
        }
    }
    
    //2) Antes de "montar" el componente en el Virtual DOM
    componentDidMount(){ // ideal para operaciones asincrónicas (AJAX)
        this.setState({ ...this.props.datos, isLoaded:true })
    }

    //4) Mostrar el componente montado en el Real DOM
    render(){
        
    return <div>{this.props.productos.map((e,i) => <Producto datos={e} key={i} />)}</div>
    }
    
}




class Producto extends React.Component {

    //1) antes de nacer el componente
    constructor(){
        super()
        this.state = {
            isLoaded : false
        }
    }
    
    //2) Al "montar" el componente en el Virtual DOM
    componentDidMount(){ // ideal para operaciones asincrónicas (AJAX)
        // setTimeout(() => {
        //     alert("Ya tenemos datos...")
        //     this.setState({ isLoaded : true })
        // }, 5000)

        this.setState({ ...this.props.datos, isLoaded:true })

    }


    //3) Despues de "montar" el componente Virtual DOM
    // componenteDidMount(){ // Ideal para operaciones sincrónicas (Iteraciones)

    //     let precioBlue = this.state.precio * 69

    //     this.setState({ 
    //         precio: precioBlue,
    //         isLoaded: true
    //      })

    // }

    //3) Mostrar el componente montado en el Real DOM
    render(){ // Se re-ejecuta cada vez que se ejecuta primero el setState()
        if(!this.state.isLoaded){

            return <em>Cargando...</em>

        } else {

            return <cite onClick={this.onUpdatePrice.bind(this)}>Soy un producto llamado {this.state.nombre} y valgo ARS {this.state.precio}...</cite>

        }
    }

    ////////////////////////
    onUpdatePrice(){
        alert(`Si, en serio soy el componente llamado "${this.state.nombre}"`)
        let newPrice = prompt("Ingrese nuevo precio")
        
        this.setState({ precio: newPrice })
    }
    
}

export default Gondola