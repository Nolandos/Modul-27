import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { createComment } from './redux/commentsReducer';

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
);

store.dispatch(createComment('pierwszy komentarz', 1));
store.dispatch(createComment('drugi komentarz', 2));