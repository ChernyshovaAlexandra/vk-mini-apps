import React from 'react'
import 'core-js/es6/map'
import 'core-js/es6/set'
import { Cheese, Pasta, Milk, Lemon, Sausage, Coffee, Choco, Apple, Butter, Melon, Meat, Tide } from './products/prodList'


const allProducts = [
    <Apple />,
    <Milk />,
    <Choco />,
    <Sausage />,
    <Pasta />,
    <Coffee />,
    <Butter />,
    <Lemon />,
    <Cheese />,
    <Melon />,
    <Meat />,
    <Tide />
]

export class Item extends React.Component {

    constructor(props) {
        super(props)
        this.prodList = allProducts
        this.prodAmmount = this.prodList.length
        this.prod = this.getProd()
        this.indexes = [this.randomInteger(0, this.prodAmmount - 1), this.randomInteger(0, this.prodAmmount - 1)]
    }
    state = {
        present: false,
        moves: 1,
        visible: true
    }

    getInitialState = () => ({ isShow: true })
    handleClick = () => {
        if (this.state.moves > 0) {
            this.setState({
                visible: !this.state.visible,
                moves: this.state.moves - 1,
            })
        }
    }
    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min)       //lodash подгрузить
        return Math.floor(rand)
    }
    getProd = () => {
        let index = this.randomInteger(0, this.prodAmmount - 1)
        return this.prodList[index]
    }
    RenderItem = () => {
        return(
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
            </div>)
    }

    render() { 
         return <this.RenderItem />
    }
    componentWillUpdate(){
        console.log(this.state.moves)
    }

}    