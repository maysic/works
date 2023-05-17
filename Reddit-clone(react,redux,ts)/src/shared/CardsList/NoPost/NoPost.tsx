import React from 'react';
import styles from './nopost.css';

export function NoPost() {
  return (
    <h2 className={styles.header}>
      Пока постов нет...
    </h2>
  );
}
