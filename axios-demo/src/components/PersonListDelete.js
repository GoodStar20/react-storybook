import React, { Component } from 'react';
import axios from 'axios'


export default class PersonListDel extends Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.data);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers);
        console.log(res.config);
      })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Person ID:
          <input type="text" name="id" onChange={this.handleChange} />
        </label>
        <button type="submit">Delete</button>
      </form>
    </div>

    )
  }
}