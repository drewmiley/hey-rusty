import React, { Component } from 'react';

import Squarer from './components/Squarer';

export default class App extends Component {
    render() {
        return <div>
            <h1>Hello, world!</h1>
            <Squarer
                number={2}
                squarer={this.props.wasm.squarer}
            />
        </div>
    }
};
