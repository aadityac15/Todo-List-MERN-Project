import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

export const Navigation = () => (
  <div>
    <Link to="/dashboard/">
      <h2>My Application</h2>
    </Link>
  </div>
);

export const ConnectedNavigation = connect(state => state)(Navigation);
