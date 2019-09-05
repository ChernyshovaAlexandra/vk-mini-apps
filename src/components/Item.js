import React from 'react'    
import 'core-js/es6/map'    
import 'core-js/es6/set'    
import { Cheese, Pasta, Milk, Lemon, Sausage, Coffee, Choco, Apple, Butter } from './products/prodList'



export default class Item extends React.Component {
    constructor(props) {
        super(props)    

        this.state = {
            visible: true,
            present: false,
            moves: 0,
        }    
        // console.log('---', _.isEqual(1,2))
        this.handleClick.bind(this)    
        this.randomInteger.bind(this)    
        this.products = [
            <Apple />,
            <Milk />,
            <Choco />,
            <Sausage/>,
            <Pasta />,
            <Coffee/>,
            <Butter/>,
            <Lemon />,
            <Cheese />
        ]    

        this.prodAmmount = this.products.length    
        this.prod = this.getProd()    
        this.indexes = [this.randomInteger(0, this.prodAmmount-1), this.randomInteger(0, this.prodAmmount-1)]

    }
    getInitialState = () => ( { isShow: true } )
    handleClick = () => {
        this.setState({
            visible: !this.state.visible,
            moves: this.state.moves + 1,
        })    
    }
    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min)       //lodash подгрузить
        return Math.floor(rand)    
    }
    getProd = () => {
        let index = this.randomInteger(0, this.prodAmmount-1)    
        return this.products[index]    
    }
    

    render() {  // вынести в функцию, так не очень красиво писать
        const { args } = this.props    
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
        )    
    }
}    