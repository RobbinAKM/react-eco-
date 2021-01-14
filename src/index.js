import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import Todo from './Todo';
import {configureStore} from './store';



ReactDOM.render(
  <Provider store={configureStore()} >
    <Todo />
  </Provider>,
  document.getElementById('root')
);
