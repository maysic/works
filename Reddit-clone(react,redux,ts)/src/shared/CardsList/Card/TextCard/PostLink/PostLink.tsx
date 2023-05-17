import React, { useState } from 'react';
import styles from './postlink.css';
import { Link } from 'react-router-dom'

interface  IPostLink {
  title?: string
  id?:string
}

export function PostLink({title, id} : IPostLink) {

  return (
    <h2 className={styles.title}>
      <Link to={`posts/${id}`}  className={styles.postLink}>
        {title}
      </Link>

    </h2>

  );
}
