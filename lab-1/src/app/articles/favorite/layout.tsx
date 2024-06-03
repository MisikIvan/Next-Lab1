"use client"
import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';

interface LayoutFavoriteProps {
  id: number;
  title: string;
  body: string;
}

interface Favorite {
  favoriteArticle?: LayoutFavoriteProps;
  children?: React.ReactNode;
}

const LayoutFavorite: React.FC<Favorite> = ({ favoriteArticle, children }) => {
  const [article, setArticle] = useState<LayoutFavoriteProps>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (favoriteArticle) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${favoriteArticle.id}`);
          const data = await response.json();
          setArticle(data);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [favoriteArticle]);


  return (
    <>
      {favoriteArticle && article ? (
        <div>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      ) : (
        children ? children : (
          <Alert variant="filled" severity="info">
            No post available.
          </Alert>
        )
      )}
    </>
  );
};

export default LayoutFavorite;
