import React from 'react'    
import {Shelf} from './Shelf'
import 'core-js/es6/map'
import 'core-js/es6/set'    

export default class Main extends React.component{
    render() {
        return (
            <div>
                <Shelf />
                <Shelf />
                <Shelf />
            </div>
        )    
    }
}