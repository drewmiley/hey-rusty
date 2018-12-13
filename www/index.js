import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './AppContainer';

import * as wasm from "../pkg/hey_rusty";

wasm.greeter();

ReactDOM.render(
  <AppContainer wasm={wasm} />,
  document.getElementById('root')
);
