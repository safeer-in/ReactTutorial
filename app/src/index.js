'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render:function(){
		return (<div>Hello World! my first react application test {this.props.num}</div>)
	}
});

ReactDOM.render(<HelloWorld num={1 + 2 + 3} />,document.getElementById('container'));