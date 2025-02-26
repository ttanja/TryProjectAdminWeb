import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';

import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const App = () => (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
