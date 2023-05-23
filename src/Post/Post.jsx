import React, { useState } from 'react';
import '../index.css';

const Post = ({ token }) => {
    const [post, setPost] = useState('');

    const handlePostChange = (e) => {
        setPost(e.target.value);
    };

    const handlePostSubmit = () => {
        const data = {
            post: post,
        };

        fetch('http://localhost:1337/post', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                // Handle the response if needed
                console.log(responseData);
            })
            .catch((error) => {
                // Handle any errors
                console.log(error);
            });
    };


    return (
        <div className="form-example">
            <label>
                Com's:
                <input type="text" name="text" value={post} onChange={handlePostChange} />
            </label>
            <button type="button" onClick={handlePostSubmit}>
                Sauvegarder le com's
            </button>
        </div>
    );
};

export default Post;
