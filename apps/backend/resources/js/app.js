require('./bootstrap');


const React = require('react');
const ReactDOM = require('react-dom');
// const Foo = require('@omedym/mycomponents');



class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  // <Foo.Thing />,
  <HelloMessage name="Taylor" />,
  document.getElementById('root')
);
