class ReactClass extends Component {
  state = {
  isHeaderHidden: false
  }
  handleClick = () => {
  this.setState(prevState => ({
  isHeaderHidden: !prevState.isHeaderHidden
  }));
  }
  
  render() {
  const {
  isHeaderHidden
  } = this.state;
  if (isHeaderHidden) {
  return (
  <button
  className="btn ban-default"
  onClick={this.handleClick}
  >
  Toggle Header
  </button>
  );
  }
  return (
  <div>
  <h1 className="header">Stateful React Component</h1>
  <button
  className="btn ban-default"
  onClick={this.handleClick}
  >
  Toggle Header
  </button>
  </div>
  );
  }
  }







































































































/** import React from 'react';
import { render, ReactDOM } from 'react-dom';
import ReactDOMServer from 'react-dom/server';


const reactElement = React.createElement('h1', {className: 'header'}, 'Hungry Lions');
ReactDOM.render(
  reactElement,
  document.getElementById('react-application')
);


// const h1 = React.createElement(
//   'h1',
//   { className: 'header', key: 'header' },
//   'This is React'
// );
// const p = React.createElement(
//   'p',
//   { className: 'content', key: 'content' },
//   'And that is how it works.'
// );
// const reactFragment = [ h1, p ];
// const section = React.createElement(
//   'section',
//   { className: 'container' },
//   reactFragment
// );

// ReactDOM.render(
//   section,
//   document.getElementById('react-application')
// );





// USING METHOD React.createFactory();
const createListItemElement = React.createFactory('li');

const listItemElement1 = createListItemElement({className: 'item-1', key: 'item-1' }, 'Item One');
const listItemElement2 = createListItemElement({className: 'item-2', key: 'item-2' }, 'Item Two');
const listItemElement3 = createListItemElement({className: 'item-3', key: 'item-3' }, 'Item Three');

const reactFragment = [
  listItemElement1,
  listItemElement2,
  listItemElement3
];

const combined = React.createElement('ul', {className: 'list-items'}, reactFragment);



// render(
// combined,
// document.getElementById('react-application')
// );

ReactDOMServer.renderToStaticMarkup(combined);

**/