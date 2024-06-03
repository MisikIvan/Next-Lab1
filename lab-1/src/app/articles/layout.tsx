"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./articles.module.css"

interface LayoutArticlesProps {
  children: any;
}

const LayoutArticles = ({ children }: LayoutArticlesProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (

    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li className={pathname === '/articles' ? 'font-bold' : ''}>
            <Link href="/articles" className={styles.header}>Articles</Link>
          </li>
          <li className={pathname === '/articles/favorite' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles/favorite">Articles Favorite</Link>
          </li>
          <li className={pathname === '/articles/create' ? 'font-bold text-blue-500' : ''}>
            <Link href="/articles/create">Articles Create</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>

  );
};
export default LayoutArticles;


