"use client"
import React, { useState, useEffect } from 'react';


interface ArticleProps {
  id: number;
  title: string;
  body: string;
}

const FavoriteArticle: React.FC<ArticleProps> = ({ title, body }) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{body}</p>
      )}
      <hr />
    </div>
  );
};

export default FavoriteArticle;