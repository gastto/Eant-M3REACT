import React, { Component } from 'react'
import './link.css'

class Link extends Component {
    
    render(){
    return <a className="App-link" href={this.props.url} target={this.props.blank ? "_blank" : "_self"} rel="noopener noreferrer">{this.props.text}</a>
    }
    
}

export default Link