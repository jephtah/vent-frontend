import React, {useState} from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState(' ');

    const handleSubmit = async () => {
        await axios.post('http://localhost:4000/posts', { title });
        setTitle(' ');
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Title</label>
                    <input className="form-control" value={title} onChange={e => setTitle(e.target.value)}  />
            </div>
                <button className="btn btn-success">Add</button>
        </form>
        </div>
    )
}