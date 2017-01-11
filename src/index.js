import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import AppStore from './stores/app-store'
const store = new AppStore;

require('!style!css!../node_modules/rc-slider/assets/index.css')
require('!style!css!../node_modules/highlight.js/styles/github.css')
require('!style!css!../node_modules/reset-css/reset.css')

ReactDOM.render(<App store={store} />, document.getElementById('root'));
