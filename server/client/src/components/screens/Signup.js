import React,{useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M, { updateTextFields } from 'materialize-css';

const Signup = () => {

    const history = useHistory();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [image,setImage] = useState("");
    const [url,setUrl] = useState(undefined)

    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])



    const uploadPic = ()=>{
        const data = new FormData()
       data.append("file",image)
       data.append("upload_preset","insta-clone")
       data.append("cloud_name","manvi")
       fetch("https://api.cloudinary.com/v1_1/manvi/image/upload",{
           method:"post",
           body:data
       })
       .then(res=>res.json())
       .then(data=>{
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })
    }

    const uploadFields = ()=>{

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
                email,
                pic:url
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

    const PostData = () => {
        if(image){
            uploadPic();
        }
        else{
            uploadFields();
        }
    }

    return(
        <div className="mycard">
            <div className="card auth-card">
              <h2>Instagram</h2>
              <input 
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <input 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />

            <div className="file-field input-field">
                <div className="btn #64b5f6 darken-1">
                    <span>Uplaod Pic</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
              
              <button className="btn waves-effect waves-light" type="submit" name="action"
              onClick={()=> PostData()}
              >
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