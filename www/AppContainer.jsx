import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return <div>
            <h1>Hello, world!</h1>
            <h2>2 squared is { this.props.wasm.squarer(2) }</h2>
        </div>
    }
};
