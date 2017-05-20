import React, { Component } from 'react';
import './Get.css';
import Poke from "./Poke.js"
class Get extends Component {
    render(){
        return (
            <div>
                <Poke id="89" />
                <Poke id="25" />
                <Poke id="31" />
                <Poke id="not id" />
            </div>
        )
    }
}
export default Get
