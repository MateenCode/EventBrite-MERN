import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

 class Navbar extends Component {
   onLogoutClick(e) {
     e.preventDefault();
     this.props.logoutUser();
   }

  render() {

    const { isAuthenticated, user } = this.props.auth;


    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link text-muted">
        Welcome, {user.name}    <span> Logout </span>
        </a>
          </li>
      </ul>
    );





    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link text-muted">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-muted">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/CreateEvent" className="nav-link"  id="event" >CREATE EVENT</Link>
          </li>
      </ul>
    );




    return (

      <nav className="navbar navbar-expand-sm navbar-dark bg-light mb-4">
        <div className="container">
          <Link to="/" id="logo" className="navbar-brand" >EventBrite</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>

    );
  }
}

Navbar.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth

})

 export default connect(mapStateToProps, { logoutUser })(Navbar);
