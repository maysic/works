import React from 'react';
import { EIcon } from '../../../../Icon';
import styles from './metadata.css';

interface IMetaData {
  author?: string
  icon_img?: string 
}

export function MetaData({author, icon_img} : IMetaData) {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img src={icon_img} alt="avatar" className={styles.avatar}/>
        <a href="#user-url" className={styles.username}>
          {author}
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано</span>
        4 часа назад
      </span>
    </div>
  );
}
