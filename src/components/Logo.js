import React from 'react';

class Logo extends React.Component {
    
    render(){
        return <img src={`https://lorempixel.com/320/320/${this.props.category}`} className="App-logo" alt="logo" />
    }
    
}

export default Logo