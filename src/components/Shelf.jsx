import React from 'react'    
import 'core-js/es6/map'    
import 'core-js/es6/set'    
import '../styles/main.css'    
import Item from './Item'    
import Coupon from './coupon'    


export default class Shell extends React.Component{
    constructor(props) {
        super(props)    

        this.state = {
            moves: 0,
        }    
        this.index = this.randomInteger(0, 6)    
        console.log(this.index)
    }
    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min)    
        return Math.floor(rand)    
    }
    
    render() {
        return (
            <div className="items-bar">
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
               <Item/>
            </div>
        )    
    }
  }    