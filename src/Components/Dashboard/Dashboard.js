import Axios from 'axios'
import React, {Components} from 'react'
import PostItem from "./PostItem.js"
import CreatePost from "./CreatePost.js"

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {posts: false, message: "try agains"}
    }


    getPosts = () => {
        Axios.get(`http://54.245.42.196/posts/${this.props.match.params.userId}`, { headers: {
            Authorization: localStorage.getItem("jw-token")}
        }).then((result) => {
                console.log(result);
                this.setState({
                    posts: result.data.posts
                })
            }).catch((err) => {
                this.setState({
                    message: 'try again'
                })
            })
    }


    render(){
        console.log("RENDER METHOD", this.state.posts);
        
        if(this.state.posts){
            var posts = this.state.posts.map((onePost)=>{
                return <PostItem key={onePost._id} post={onePost}/>
            })
            return(
                <div>
                    <h1>Welcome</h1>
                    <h4> Post </h4>
                    {posts}
                    
                </div>
            )
        } else {
            return <h3> {this.state.message} </h3>
        }

    }

    componentDidMount(){
        this.getPosts();
    }
}

export default Dashboard