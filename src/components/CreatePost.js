import { useState } from "react";

function CreatePost() {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [subtitle, setSubtitle] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log('title', title);
  }
    return (
      <div className="create-post">
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
              <label>Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div className="form-field">
              <label>Sub Title</label>
              <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
          </div>

          <div className="form-field">
              <label>Content</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </div>

          <button className="create-post-btn">Create-Post</button>
        </form>
      </div>
    );
  }
  
  export default CreatePost;