import React from 'react';
import 'core-js/es6/map';
import 'core-js/es6/set';
import Apple from './products/apple';
import Milk from './products/milk';
import Choco from './products/choco';
import Sausage from './products/sausage';
import Pasta from './products/pasta';
import Coffee from './products/coffee';
import Butter from './products/butter'
import Lemon from './products/lemon'
import Cheese from './products/cheese'



class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true,
            present: false,
            moves: 0,
        };

        this.handleClick.bind(this);
        this.randomInteger.bind(this);
        this.products = [
            <Apple />,
            <Milk />,
            <Choco />,
            <Sausage />,
            <Pasta />,
            <Coffee />,
            <Butter />,
            <Lemon />,
            <Cheese />
        ];

        this.prodAmmount = this.products.length;
        this.prod = this.getProd();
        this.indexes = [this.randomInteger(0, this.prodAmmount-1), this.randomInteger(0, this.prodAmmount-1)]

    }
    getInitialState() {
        return {
            isShow: true
        };
    }
    handleClick = () => {
        this.setState({
            visible: !this.state.visible,
            moves: this.state.moves + 1,
        });
    }
    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    getProd = () => {
        let index = this.randomInteger(0, this.prodAmmount-1);
        return this.products[index];
    }
    

    render() {
        const { args } = this.props;
        return (
            this.state.visible ?
                <div className="itm" onClick={this.handleClick}>
                    <div className="itm-content">
                        {this.prod}
                    </div>
                </div>
                :
                <div className="itm " onClick={this.handleClick}>
                    <div className="itm-content flip">
                    {this.prod}
                    </div>
                </div>
        );
    }
};

export default Item;