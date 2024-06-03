"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LayoutArticles from '../layout';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

type Props = {
  params: {
    id: string;
  };
};

const Article: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const postData = await postResponse.json();
        setPost(postData);

        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching post and comments:', error);
      }
    };

    if (id) {
      fetchPostAndComments();
    }
  }, [id]);

  return (
    <>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Article;


