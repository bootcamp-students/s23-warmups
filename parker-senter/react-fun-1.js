const React = require('react');
//creates components 'Hello' and 'World'
const Hello = () => <h1>Hello</h1>;
const World = () => <h2>World!</h2>
//nests components in a class component
class Greet extends React.Component {
  render() {
    return <div><Hello /><World /></div>;
  }
}