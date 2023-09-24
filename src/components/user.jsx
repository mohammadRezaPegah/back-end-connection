import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class User extends Component {
  render() {
    return (
      <>
        <div className="col-lg-2 col-md-3 col-sm-6 col-6 text-center p-2">
          <div className="card">
            <img
              className="card-img-top m-auto"
              src={this.props.avatar}
              alt="Avatar"
              style={{ width: "150px", height: "150px" }}
            />
            <div className="card-body">
              <Link to={`/users/${this.props.id}`}>
                <h5 className="card-title">
                  {this.props.first_name} {this.props.last_name}
                </h5>
              </Link>
              <p className="card-text">{this.props.email}</p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-primary btn-sm w-100"
                    onClick={() => {
                      this.update(this.props.id);
                    }}
                  >
                    Update
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => {
                      this.delete(this.props.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  update = (user) => {
    this.props.onUpdate(user);
  };
  delete = (user) => {
    this.props.onDelete(user);
  };
}

export default User;
