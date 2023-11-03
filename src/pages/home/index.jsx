// import React from 'react';
import PropTypes from 'prop-types';

function Index({ user }) {
  return (
    <>
      <div>
        <h1>Welcome to the Home Page</h1>
        {user && (
          <div>
            <h2>User Profile</h2>
            <p>Name: {user?.displayName}</p>
            {user?.photoURL && <img src={user?.photoURL} alt="User Profile" />}
          </div>
        )}
      </div>
    </>
  );
}

Index.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  })
};

export default Index;
