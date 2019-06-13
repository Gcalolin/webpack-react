import React from 'react';
import ReactDom from 'react-dom';

import App from './app.js'

ReactDom.render(
    React.createElement(App),
    document.querySelector('#app')
)