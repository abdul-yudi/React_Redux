import React, { Component } from "react";
import ReactDOM from "react-dom";

// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// REDUX
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// LAYOUTS
import Header from "./layouts/header";
import { Footer } from "./layouts/footer";

// COMPONENT
import Home from "./components/home";
import Article from "./components/article";
import User from "./components/user";
import userDetail from "./components/userDetail";

// REDUCERS
import users from "./redux/user";

import "../public/assets/css/bootstrap.min.css";

const Reducers = combineReducers({
  users: users
});

const store = createStore(Reducers, applyMiddleware(thunk));

// RENDER
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <div className="container">
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/user/:id" component={userDetail} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
