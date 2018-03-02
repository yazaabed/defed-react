/**
 * Import react things
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Main css file for this project
 */
import './index.css';

/**
 * This created by react create app team to handle caching things and make app faster
 */
import registerServiceWorker from './registerServiceWorker';

/**
 * Import our main app to start work
 */
import { App } from './app';

/**
 * Attach our app to root element on index.html
 */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/**
 * Call the caching process
 */
registerServiceWorker();
