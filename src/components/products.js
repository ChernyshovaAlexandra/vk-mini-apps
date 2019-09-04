import React from 'react';
import photos from '../img/4/';



const photoList = [
    photos[0], photos[1], photos[2]
];
class Products extends React.Component{
    render() {
        return (
            <Image src={this.props.photo} />
        )
    }
}

export default Products;