import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import $ from "jquery";

import { Add, Show, ShowOne, Delete, Search } from "../redux/user";

import Loading from "../layouts/loading";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        {this.props.users ? (
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <input className="form-control fname" type="text" />
                  </div>
                  <div className="form-group">
                    <input className="form-control lname" type="text" />
                  </div>
                  <div className="form-group">
                    <button onClick={this.props.Add}>Add</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {this.props.users.allUser.map((key, value) => (
                      <li key={key.id} className="list-group-item">
                        {key.first_name + " " + key.last_name}
                        <Link
                          to={"/user/" + key.id}
                          className="btn-btn-success btn-sm float-right"
                        >
                          View
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {console.log(this.props.users)}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

// CONTAINER
const stateToProps = state => ({
  users: state.users,
  allUser: state.allUser
});

const dispatchToProps = dispatch => ({
  Add: (fname, lname) => {
    fname = $(".fname").val();
    lname = $(".lname").val();
    return dispatch(Add(fname, lname));
  },

  Show: () => {
    return dispatch(Show());
  },

  ShowOne: id => {
    return dispatch(ShowOne(id));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(Home);
