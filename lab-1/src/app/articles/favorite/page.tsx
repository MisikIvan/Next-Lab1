"use client"
import React, { useEffect, useState } from 'react';
import FavoriteArticle from './components/FavoriteArticle';

interface Post {
  id: number;
  title: string;
  body: string;
}

const FavoriteArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Post[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const ids = [1, 2, 3];
        const promises = ids.map(id =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json())
        );
        const articlesData = await Promise.all(promises);
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Favorite Articles</h1>
      {articles.map(article => (
        <FavoriteArticle key={article.id} id={article.id} title={article.title} body={article.body} />
      ))}
    </div>
  );
};

export default FavoriteArticlesPage;
