import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import $ from "jquery";

import { Add, Show, ShowOne, Delete, Search } from "../redux/user";

class Header extends React.Component {
  constructor() {
    super();
    this.valSearch = this.valSearch.bind(this);
  }

  valSearch(e) {
    this.props.Search(e.target.value);
  }

  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a className="navbar-brand" href="#" />
        <button className="navbar-toggler" type="button" data-toggle="collapse">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <a className="nav-link" onClick={this.props.Show}>
                Users
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" method="get">
            <input
              className="form-control mr-sm-2 search-header"
              type="search"
              placeholder="Search"
              onChange={this.valSearch}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const stateToProps = state => ({});

const dispatchToProps = dispatch => ({
  Show: () => {
    return dispatch(Show());
  },

  Search: keyword => {
    return dispatch(Search(keyword));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(Header);
