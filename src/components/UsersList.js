import React, { Component } from 'react';

class UsersList extends Component {

    removeUser = (key) => {
        this.props.delete(key);
    }

  render() {

    const listItems = this.props.users.map((user, i)=>{
        return <li key={i} onClick={()=>this.removeUser(i)}>{user}</li>;

    });

    return (
      <ul className="users-list">
      {listItems}
      </ul>
    );
  }
}

export default UsersList;
