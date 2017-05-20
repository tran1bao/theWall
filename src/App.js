import React, {Component} from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import './App.css'
import Get from "./Components/Get/Get.js"
import Header from "./Header.js"
import Film from "./Components/StarWars/Film.js"
import Post from "./Components/Post/Post.js"
import GetUsers from "./Components/User/GetUsers.js"
import Login from "./Components/Login/Login.js"
import Dashboard from "./Components/Dashboard/Dashboard.js"

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path = "/" component={Get} />
        <Route path="/starwars" component={Film} />
        <Route path="/post" component={Post} />
        <Route path="/userlist" component={GetUsers} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard/:userId" component={Dashboard} />
        <Route path="/posts/create" component={CreatePost} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App