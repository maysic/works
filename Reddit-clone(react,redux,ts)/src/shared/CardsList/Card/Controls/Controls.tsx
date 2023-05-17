import React from 'react';
import styles from './controls.css';

interface IControls {
  children?: React.ReactNode;
}

export function Controls({children} : IControls) {
  return (
    <div className={styles.controls}>
      {children}
    </div>
  );
}
