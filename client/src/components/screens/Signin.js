import React from 'react';
import {Link} from 'react-router-dom';

const Signin = () => {

    return(
        <div className="mycard">
            <div class="card auth-card">
              <h2>Instagram</h2>
              <input 
              type="text"
              placeholder="Email"
              />
              <input 
              type="text"
              placeholder="Password"
              />
              
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              Login
              </button>
              <h6>
                  <Link to="/signup">New User? SignUp</Link>
              </h6>
            </div>
        </div>
    );
}

export default Signin;