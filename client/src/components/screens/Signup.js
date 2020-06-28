import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {

    return(
        <div className="mycard">
            <div class="card auth-card">
              <h2>Instagram</h2>
              <input 
              type="text"
              placeholder="Name"
              />
              <input 
              type="text"
              placeholder="Email"
              />
              <input 
              type="text"
              placeholder="Password"
              />
              
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              SignUp
              </button>
              <h6>
                  <Link to="/signin">Already a user? SignIn</Link>
              </h6>
            </div>
        </div>
    );
}

export default Signup;