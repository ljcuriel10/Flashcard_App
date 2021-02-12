import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="NotFound">
    <Link to="/" className="btn btn-secondary breadcrumb">Go Home</Link>
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
