import React, { useState } from 'react'
import axios from 'axios';

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (content !== "") {
            await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
              content,
            });
            setContent("");
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Add task </label>
                    <input className="form-control" value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <button className="btn btn-primary">post</button>
            </form>
        </div>
    )
}

export default CommentCreate;
