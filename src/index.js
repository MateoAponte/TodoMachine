import React from 'react';
import ReactDOM from 'react-dom';
import './ToDoComponents/assets/style/index.css';

import { ToDoContainer } from './ToDoComponents/view/ToDoContainer';

const root = document.querySelector('#root');
const app = ReactDOM.createRoot(root);

app.render(
  <>
    <ToDoContainer />
  </>,
);
