# `hey-rusty`

Using a template for kick starting a Rust and WebAssembly project from [`rustwasm`](https://rustwasm.github.io/book/) and also [`create-wasm-app`](https://github.com/rustwasm/create-wasm-app)

Implements a simple react component to leverage rust examples.

## To run

1. Clone the repo
1. Run `wasm-pack build` in the root directory
1. This builds your Rust code in the `src` folder into WebAssembly in the `pkg` folder
1. `cd www/`
1. Run `npm install`
1. Run `npm start`

## Development of Rust/WebAssembly

1. Work in the `src/lib.rs` file and repeat 'To Run' step from 2 onwards

## Development of js

1. Work in the `www/` directory with `npm start` running
