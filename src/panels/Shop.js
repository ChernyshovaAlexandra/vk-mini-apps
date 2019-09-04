import React from "react";
import 'core-js/es6/map';
import 'core-js/es6/set';

class Shop extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            moves: 0
        };
        this.handleClick.bind(this);
    }
  handleClick = () => {
        this.setState({
			moves: this.state.moves + 1,
        });
	}
	render(){
		return (
			<div className="moves"  onClick ={this.handleClick}> { this.state.moves } </div>
		)
	}
}
export default Shop;