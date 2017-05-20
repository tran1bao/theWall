import Axios from 'axios'
import React, {Component} from 'react'
import FilmItem from "./FilmItem.js"

class Film extends React.Component{
    constructor(props){
        super(props)
        this.state = {films: false, message: 'Fetching data..'}
    }

    componentDidMount(){
        Axios.get("http://swapi.co/api/films").then((response) =>{
            console.log(response);
            this.setState({
                films: response.data.results,
                message: ""
            })
        }).catch((err) => {
            console.log (err);
        })
    }

    render(){
        if(this.state.films){
            var movies = this.state.films.map((movie) => {
                return <FilmItem key={movie.episode_id} filmData = {movie} />
            })
        return(
            <div>
                <h1> Get Star Wars assignment </h1>
                {movies}
            </div>
        )
    } else {
        return <h1> {this.state.message} </h1>
    }
}

}

export default Film;
