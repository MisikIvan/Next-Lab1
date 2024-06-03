"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "../articles/articles.module.css"


const LayoutProfile = () => {
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
            <Link href="/profile/security">Profile Security</Link>
          </li>
          <li className={pathname === '/articles/create' ? 'font-bold text-blue-500' : ''}>
            <Link href="/profile/settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
  </div>

  );
};
export default LayoutProfile;


