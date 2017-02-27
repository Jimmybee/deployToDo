import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App';
import Main from './main';
import './index.css';

const app = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
   	  <IndexRoute component={Main}></IndexRoute>
   	  <Route path="settings" name="settings" component={Main}></Route>
    </Route>
  </Router>,
app);