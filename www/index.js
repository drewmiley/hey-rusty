import React from 'react';
import ReactDOM from 'react-dom';

import * as wasm from "../pkg/hey_rusty";

wasm.greeter();

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
