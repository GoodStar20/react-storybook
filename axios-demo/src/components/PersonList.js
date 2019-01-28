import React, { Component } from 'react';

//import axios
import axios from 'axios';


// export class
export default class PersonList extends Component {
  state = {
    persons: []
  }

  // fetch resource on component mounting
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
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