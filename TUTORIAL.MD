## Rust and React - in only 20 steps

1. Open a terminal window
2. `curl https://sh.rustup.rs -sSf | sh`
3. `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`
4. `cargo install cargo-generate`
5. `npm install npm@latest -g`
6. `cargo generate --git https://github.com/rustwasm/wasm-pack-template` with YOUR_CHOSEN_NAME
7. `cd YOUR_CHOSEN_NAME/`
8. Open `src/lib.rs` and add 
```
    #[wasm_bindgen]
    pub fn squarer(x: i32) -> i32 {
        x * x
    }
```
9. `wasm-pack build`
10. `npm init wasm-app www`
11. `cd www/`
12. `npm install --save-dev react react-dom @babel/core @babel/plugin-syntax-dynamic-import @babel/preset-env @babel/preset-react babel-loader`
13. `touch .babelrc`
14. Open `www/.babelrc` and add
```
    {
        "plugins": ["@babel/plugin-syntax-dynamic-import"]
    }
```
15. Open `www/index.html` and add above the script tag
```
    <div id='root'></div>
```
16. Open `www/index.js` and add
```
    import React from 'react';
    import ReactDOM from 'react-dom';

    import * as wasm from "../pkg/YOUR_CHOSEN_NAME";

    ReactDOM.render(
      <h1>Hello, world! 2 squared is { wasm.squarer(2) }</h1>,
      document.getElementById('root')
    );
```
17. Open `www/webpack.config.js` and add within the main object
```
    resolve: {
      extensions: [".js", ".jsx", ".wasm"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/preset-react"]
            }
          }
        }
      ]
    }
```
18. `npm install`
19. `npm start`
20. Enjoy at `http://localhost:8080`

