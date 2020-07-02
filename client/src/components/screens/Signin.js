import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signin = () => {

    const history = useHistory();
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid Email!"});
            return;
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
                M.toast({html: 'Fill the data!'});
            }
            else{
                M.toast({html: 'SignIn Successful!'});
                history.push('/');
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return(
        <div className="mycard">
            <div class="card auth-card">
              <h2>Instagram</h2>
              <input 
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <input 
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              
              <button className="btn waves-effect waves-light" type="submit" name="action"
              onClick={()=> PostData()}
              >Submit
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