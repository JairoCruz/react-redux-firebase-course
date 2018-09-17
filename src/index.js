import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
const store = createStore(composeWithDevTools());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
