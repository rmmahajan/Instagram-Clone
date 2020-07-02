import React,{useState} from 'react';

const CreatePost = ()=>{

    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [image,setImage] = useState("");

    return(
        <div className="card input-filed"
        style={{
            margin: "40px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}
        >
            <input 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="Body" 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />

            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              Submit
              </button>
        </div>
    );
}

export default CreatePost;