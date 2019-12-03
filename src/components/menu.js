import React, { Component } from 'react'
import Link from './link'


class Menu extends Component {   
    render(){

        const menu = this.props.items.map( (e, i) => <Link url={e.url} blank={e.blank} text={e.text} key={i} /> )

    return <nav>{menu}</nav>
        
        
    }

}

export default Menu

