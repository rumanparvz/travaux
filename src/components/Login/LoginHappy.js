import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Common/NavBar/NavBar.jsx';

const LoginHappy = () => {
    return (
      <div>
        <NavBar />
        <div className="d-flex justify-content-center mt-5">
          <div>
            <div>
              <h2>Happy to see you again</h2>
              <p className="m-0">
                Looks like you already have an account. Please log in to view
                construction projects.
              </p>
              <p className="m-0">
                If you don't know your password, you can reset it in the next
                step.
              </p>
              <Link to="/connexion">
                <button className="primary_button my-5">Login</button>
              </Link>
              <p>You can also contact our Customer Service: 04 13 44 03 38</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LoginHappy;