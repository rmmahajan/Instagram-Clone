import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../../App';
import M from 'materialize-css';

const Signin = () => {

    const {state,dispatch} = useContext(UserContext);
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
                localStorage.setItem("jwt",data.token);
                localStorage.setItem("user",JSON.stringify(data.user));
                dispatch({type:"USER",payload:data.user})
                M.toast({html: 'SignIn Successful!'});
                history.push('/');
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return(
        <div className="mycard">
            <div className="card auth-card">
              <h2>Instagram</h2>
              <input 
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <input 
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              
              <button className="btn waves-effect waves-light" type="submit" name="action"
              onClick={()=> PostData()}
              >
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