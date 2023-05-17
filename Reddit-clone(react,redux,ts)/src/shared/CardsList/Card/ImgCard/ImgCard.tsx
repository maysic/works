import React from 'react';
import styles from './imgcard.css';

interface IImgCard {
  img?: string
}

export function ImgCard({img}: IImgCard ) {
  return (
      <div className={styles.preview}>
        <img src={img} alt="img" className={styles.previewImg} />
      </div>
  );
}
