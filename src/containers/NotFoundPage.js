import React from 'react';
import { Link } from 'react-router';


const NotFoundPage = () => {
  return (
    <div className="component-container">
      <h1>
        404 Page Not Found
      </h1>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
