import React, { Component } from 'react';

/*
const ImageComponent = () => {
    const imageUrl = 'https://source.unsplash.com/random';
    return (
        <div>
            <img src={imageUrl}
            alt="Descrizione dell'immagine"
            style={{ width: '20%' }} />
        </div>
        
    );
}

export default ImageComponent;
*/

class ImageComponent extends Component {
    render () {
        return (
            <div>
            <img src={this.props.imageUrl}
            alt={this.props.imageAlt}
            style={{ width: '20%' }} />
            </div>
        )
    }
}

export default ImageComponent;