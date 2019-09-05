import React from "react"
import 'core-js/es6/map'
import 'core-js/es6/set'

export default class Shop extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        moves: 0
    }
    handleClick = () => {
        this.setState({
            moves: this.state.moves + 1,
        })
    }
    render() {
        return (
            <div className="moves" onClick={this.handleClick}> {this.state.moves} </div>
        )
    }
}
