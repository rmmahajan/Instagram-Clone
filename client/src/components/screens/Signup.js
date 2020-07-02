import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {

    const history = useHistory();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid Email!"});
            return;
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
                M.toast({html: 'Fill the data!'});
            }
            else{
                M.toast({html: 'SignUp Successful!'});
                history.push('/signin');
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
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
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