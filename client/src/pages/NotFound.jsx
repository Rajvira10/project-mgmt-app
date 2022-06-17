import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationCircle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead">Sorr, this page does not exist</p>
    </div>
  );
};

export default NotFound;
