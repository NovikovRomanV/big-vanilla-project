import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import student from "./02/02";
import {city} from "./03/03";
import {ages, oldAges} from "./04/04";
import {dimychTransformator, messages, people} from "./05/05_01";

const sentense = "Hello my friend!";
console.log(student);
console.log(city);
console.log(oldAges);
console.log(ages);
console.log(dimychTransformator(people[0]));
console.log(messages);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
