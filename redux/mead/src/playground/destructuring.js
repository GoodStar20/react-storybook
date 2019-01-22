// import { normalize } from "path";

const person = {
  name: 'Andrew',
  age: 36,
  location: {
    city: 'Lagos',
    temp: 92,
    age: 43
  }
}

// const { name = "Ruddy Mendy", age } = person;

// console.log(`${name} is ${age}`)

// // Desc person.location
// const { city, temp, age: lAge } = person.location;
// console.log(`${city} had been aged ${lAge} towards ${temp}`)

// // Desc for book club
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

// let { name: publisherName = 'Self Published'} = book.publisher
// console.log(publisherName); // Penguin(valid name), Self-Published

// Array Destructuring
let array = Object.keys(book)
console.log(array)

// const [ ...state] = array;
const regular = [...array].join(' ')
console.log(`You are printing ${regular}`);