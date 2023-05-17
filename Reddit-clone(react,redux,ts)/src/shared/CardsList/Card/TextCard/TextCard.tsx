import React from 'react';
import styles from './textcard.css';

interface ITextCard {
  children?: React.ReactNode;
}

export function TextCard({children} : ITextCard) {
  return (

    <div className={styles.textContent}>
        {children}
    </div>
  );
  
}
