import React, { Component } from 'react';

export default class Squarer extends Component {
    render() {
        return <h2>
            { this.props.number } squared is { this.props.squarer(this.props.number) }
        </h2>
    }
};