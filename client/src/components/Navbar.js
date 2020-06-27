import React from 'react';

const NavBar = ()=>{
     return(
        <nav>
        <div className="nav-wrapper white">
          <a href="#" className="brand-logo left">Logo</a>
          <ul id="nav-mobile" className="right">
            <li><a href="sass.html">Login</a></li>
            <li><a href="badges.html">SignUp</a></li>
            <li><a href="collapsible.html">Profile</a></li>
          </ul>
        </div>
      </nav>
     );
}

export default NavBar;