import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Header Navigation
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <Link className="navbar-brand" to="/">
          DIARY2018
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={App} exact={true} />
          <Route path="/login" component={Login} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
