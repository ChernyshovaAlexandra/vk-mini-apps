import React from "react"
import 'core-js/es6/map'
import 'core-js/es6/set'
import { Shelf } from '../components/Shelf'
import { Coupon } from '../components/coupon'
import { Item } from '../components/Item'

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min)       //lodash подгрузить
    return Math.floor(rand)
}
export default class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moves: 1,
            visible: true
        }
    }

    handleClick = () => {
        if (this.state.moves > 0) {
            this.setState({
                moves: this.state.moves - 1,
            })
        } 
        // console.log(this.prodMass)
    }
    render() {
        return (
            <div className="shop" onClick={this.handleClick}>
                <Shelf />
                <Shelf />
                <Shelf />
                <div className="moves">Осталось ходов: {this.state.moves}</div>
            </div>
        )
    }
    componentDidMount = () => {
        let index = randomInteger(0, document.getElementsByClassName('itm').length - 1)
        // console.log( typeof <Item />)
    }
}
