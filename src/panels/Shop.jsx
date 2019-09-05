import React from "react"
import 'core-js/es6/map'
import 'core-js/es6/set'
import { Shelf } from '../components/Shelf'
// import { allProducts } from '../components/Item'

export default class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moves: 1,
            visible: true
        }
        // this.prodMass = allProducts
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
            <div className="shop" onClick={ this.handleClick }>
                <Shelf />
                <Shelf />
                <Shelf />
                <div className="moves">Осталось ходов: {this.state.moves} </div>
            </div>
        )
    }
    componentDidMount = () => {
        console.log(document.getElementsByClassName('itm'))
    }
}
