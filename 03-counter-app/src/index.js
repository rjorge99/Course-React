import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css';
// import PrimeraApp from './PrimeraApp';

const root = document.querySelector('#root');

ReactDOM.render(<CounterApp value={10} />, root);
// ReactDOM.render(<PrimeraApp saludo='Hola' />, root);
