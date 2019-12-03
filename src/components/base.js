import React from 'react'

class Logo extends React.Component {

    //1) antes de nacer el componente
    constructor(){
        super()
        this.state = {}
    }
    
    //2) Antes de "montar" el componente en el Virtual DOM
    componentWillMount(){ // ideal para operaciones asincrónicas (AJAX)
        
    }


    //3) Despues de "montar" el componente Virtual DOM
    componenteDidMount(){ // Ideal para operaciones sincrónicas (Iteraciones)

    }

    //4) Mostrar el componente montado en el Real DOM
    render(){
        return 
    }
    
}

export default Logo