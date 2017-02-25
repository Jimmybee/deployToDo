import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router";

import App from './App';
import './index.css';

const app = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>,
app);