var React = require('react');
var ReactDOM = require('react-dom');
const MyComponent = props => {
  return <h1>Hello, {props.name}!</h1>;
  };
  ReactDOM.render(<MyComponent name="Arun" />, element);