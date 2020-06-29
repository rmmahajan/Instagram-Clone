import React from 'react';

const CreatePost = ()=>{
    return(
        <div className="card input-filed"
        style={{
            margin: "40px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center"
        }}
        >
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Body" />

            <div className="file-field input-field">
                <div className="btn">
                    <span>Upload Image</span>
                    <input type="file" />
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