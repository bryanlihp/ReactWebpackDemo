// JavaScript source code
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

var names = ["Alice", "Emily", "Ada"];
var arr = [
    <h2>React</h2>,
    <h2>Is Awesome!</h2>
];
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                {
                    names.map(n => <div>{n}</div>)
                }
                <div>{arr}</div>
                <HelloMsg name="Dummy" className="test">
                    <span>row1</span>
                    <span>row2</span>
                </HelloMsg>
                <HelloMsg name="Dummy1" className="test">The only text</HelloMsg>
                <HelloMsg name="Dummy2" className="test" />
                <HelloMsg name1="dummy3" className="test" />
            </div>
        );
    }
};
    
    
class HelloMsg extends React.Component {
    

    render() {
        return (
            <div>
                <h1 className={this.props.className}> Hello from component {this.props.name} !</h1>
                <ul>
                    {
                        React.Children.map(this.props.children, c => (<li key="1">{c}</li>))
                    }
                </ul>
            </div>
        );
    }

};

HelloMsg.propTypes = {
    name: PropTypes.string.isRequired
};
HelloMsg.defaultProps = { name: 'NoName' };


ReactDOM.render(<App />, document.getElementById("content"));