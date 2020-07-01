import React from 'react'
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
    return (
        <div className="container mt-5">
            <h1> Create A New Goal</h1>
            <PostCreate />
            <hr />
            <div>
                <PostList />
            </div>
        </div>
    )
}

export default App;
