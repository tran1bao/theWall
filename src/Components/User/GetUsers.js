import React, { Component } from 'react';
import Axios from 'axios';
import UserItem from "./UserItem.js";
class GetUsers extends Component {
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {users: false, message: ""}
    }
    render() {
        if(this.state.users){
            var userList = this.state.users.map((userObject) => {
                return <UserItem key={userObject._id} UserInfo={userObject} />
            })
            return (
                <div>
                    <h1>UserList</h1>
                    {userList}
                </div>
            )            
        } else {
            return <h1>Loading</h1>
        }
    }
    componentDidMount(){
        Axios.get("http://54.245.42.196/users", {
            cancelToken: this.cancelToken.token
        }).then((response) => {
            console.log(response);
            this.setState({
                users: response.data
                
            })
        }).catch((err) => {
            if(Axios.isCancel(err)) {
                console.log("User request cancelled", err.message);
            } else {
                this.setState({
                    message: "users not found"
                })
            }
        })

    }
    componentWillUnmount(){
        this.cancelToken.cancel("request for userlists cancelled by the user");
    }
    
}
export default GetUsers;