import React, { Component } from "react";
import Test from './components/test';
import Test2 from './components/test2'


export default class App extends Component {
    
    render(){
        return (
            <div>
                Hello world
                <Test />
                <Test2 />
            </div>
        )
    }
}