require('./bootstrap');


const React = require('react');
const ReactDOM = require('react-dom');
const Foobar = require('@omedym/coolcomponents');

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <div>
    <Foobar.SomeComponent></Foobar.SomeComponent>
    <Foobar.Header />
    <Foobar.SmallHeader />
  </div>,
  document.getElementById('root')
);
