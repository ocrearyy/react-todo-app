import React from 'react';
import ReactDOM from 'react-dom';
// component files
import TodoContainer from './components/TodoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

const element = <h1>hi from Create React App</h1>;

ReactDOM.render(element, document.getElementById('root'));
