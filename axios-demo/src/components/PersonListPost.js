import React, { Component } from 'react';
import axios from 'axios';


export default class PersonListPost extends Component {
  // default state
  state = {
    name: '',
  }

  // handle change to log user input
  handleChange = event => {
    this.setState({name: event.target.value});
    console.log(this.state.name);
  }


  // call axios within the handleSubmit function
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  // render component
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add User</button>
        </form>
      </div>
    )
  }
}