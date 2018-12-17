import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import 'element-theme-default';

import App from './src/App.jsx';

render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
);
