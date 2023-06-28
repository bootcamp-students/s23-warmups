const React = require('react');
//add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
//create elements
const Hello =()=><h1>Hello</h1>;
const World =()=><h2>World!</h2>;
//render compontents using class syntax
class Greet extends React.Component {
    render() {
        return <div><Hello /><World /></div>;    
    }
}
