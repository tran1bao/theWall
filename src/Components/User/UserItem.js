import React, { Component } from 'react';

class UserItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.UserInfo.username}</p>
            </div>
        )
    }
    
}
export default UserItem;