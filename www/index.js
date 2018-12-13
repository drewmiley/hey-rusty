import React from 'react';
import ReactDOM from 'react-dom';

import * as wasm from "../pkg/hey_rusty";

wasm.greeter();

ReactDOM.render(
  <h1>Hello, world! 2 squared is { wasm.squarer(2) }</h1>,
  document.getElementById('root')
);
