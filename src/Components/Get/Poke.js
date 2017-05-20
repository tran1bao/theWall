import Axios from 'axios'
import React, {Component} from 'react'
import "./Poke.css"

class Poke extends Component {

    constructor(props){
        super(props)
        this.cancelToken = Axios.CancelToken.source();
        this.state = {pokemon: false, message: "Loading.."}
    }

    render(){
        if (this.state.pokemon){
            return(
                <div>
                    <h3>{this.state.pokemon.name}</h3>
                    <img src={this.state.pokemon.sprites.front_shiny} alt="" />
                </div>
            )
        } else {
            return <h3> {this.state.message} </h3>
        }
    } 


    componentDidMount(){
        Axios.get("http://pokeapi.co/api/v2/pokemon/" + this.props.id, {
            cancelToken: this.cancelToken.token
        }).then((result) => {
                this.setState ({
                    pokemon: result.data,
                    message: ""
                })
            }).catch((err) => {
                if (Axios.isCancel(err)){
                    console.log('Request Cancelled', err.message);
                } else {
                    this.setState({
                        message: 'Pokemon `${this.props.id}` not found.'
                    })
                }
            })
    }

    componentWillUnmount(){
        this.cancelToken.cancel('Operation Cancelled')
    }

}

export default Poke









/*import Axios from 'axios'
import React, { Component } from 'react';
import './Poke.css';

class Poke extends Component {
    constructor(props){
    super(props);
    this.cancelToken = Axios.CancelToken.source();
    this.state = {pokemon: false, message: "Loading..."}
    }
    render(){
        if(this.state.pokemon){
            return (
                <div>
                    <h1>{this.state.pokemon.name}</h1>
                    <img src={this.state.pokemon.sprites.front_shiny} alt="" />
                </div>
            )
        } else {
            return <h1>{this.state.message}</h1>
        }
    }

    componentDidMount(){
        Axios.get("http://pokeapi.co/api/v2/pokemon/" + this.props.id, {
            cancelToken: this.cancelToken.token
        }).then((result) => {
            this.setState({
                pokemon: result.data,
                message: ""
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log('Request canceled', err.message);
            } else {
                this.setState({
                    message: `Pokemon with ID "${this.props.id}" not found`
                })
            }
        })
    }
    componentWillUnmount(){
        this.cancelToken.cancel("Operation canceled by the user");
    }

}  


export default Poke*/

