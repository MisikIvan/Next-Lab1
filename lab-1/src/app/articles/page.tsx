"use client"
import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Articles: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchPosts();
  }, []);
  

  return (
    <>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <Alert variant="filled" severity="info">
          No post available.
        </Alert>
      )}
    </>
  );
};

export default Articles;


