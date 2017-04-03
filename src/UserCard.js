import React, { Component } from 'react';
import Users from './users';

class UserCard extends Component {

  render() {
    const list = Users.map(function(user){
      return (
          <figure>
            <img src={user.avatar_url} alt={user.name} />
            <figcaption>{user.name}</figcaption>
            <a href={user.html_url}>{user.login}</a>
          </figure>
      );
    });
    return (
        <div>{list}</div>
    );
  }
}

export default UserCard;
