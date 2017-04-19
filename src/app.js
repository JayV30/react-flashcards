import 'babel-polyfill'; // emulates full ES6 in broswer
import React from 'react';
import { render } from 'react-dom';

import Main from './components/class/main';

render(<Main />, document.getElementById('app'));