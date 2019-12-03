import React from 'react'

class Video extends React.Component {
    
    render(){
        return <iframe title="video" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.id}?autoplay=${this.props.play === 'yes' ? 1 : 0 }`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
    
}

export default Video


