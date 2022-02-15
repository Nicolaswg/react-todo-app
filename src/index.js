import React from 'react';
import ReactDOM from 'react-dom';
// component file
import TodoContainer from './functionBased/components/TodoContainer';

//stylesheet
import './functionBased/index.css'

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

