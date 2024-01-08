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
        const imageUrl = 'https://source.unsplash.com/random';
        return (
            <div>
            <img src={imageUrl}
            alt="Descrizione dell'immagine"
            style={{ width: '20%' }} />
            </div>
        )
    }
}

export default ImageComponent;