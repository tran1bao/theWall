import Axios from 'axios'
import React from 'react';

class CreatePost extends React.Component{

handleSubmit = (e) => {
       e.preventDefault()        
       Axios({
           method: "post",
           url: "http://54.245.42.196/posts/create",
           data: {username: " " , password: this.props.match.user_id },
           headers: {Authorization: localStorage.getItem("jw-token")}
       }).then((result) => {
           console.log("successful")
           localStorage.getItem("jw-token");
           this.props.history.push("/dashboard/:user_id");
       }).catch((err) => {
           console.log("unsuccessful");
       })
   }

    render(){
        return(
            <h1> hi </h1>
        )
    }
}