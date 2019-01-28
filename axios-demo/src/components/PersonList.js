import React, { Component } from 'react';

//import axios
// destructure the axios create into any identity we want
import API from './Api';

// export class
export default class PersonList extends Component {
  state = {
    persons: []
  }

  // fetch resource on component mounting
  componentDidMount() {
    // note that we export the axios.create class anonymously
    API.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  // render persons data 
  render() {
    return (
      <ul>
        { this.state.persons.map((persons, keys) => (<li key={keys}>{persons.name}</li>)) }
      </ul>
    )
  }
}