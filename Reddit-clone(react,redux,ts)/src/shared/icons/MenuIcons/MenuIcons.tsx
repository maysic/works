import React from 'react';
import { IIcon } from '../../../utils/react/interface';
import styles from './menuicons.css';

export function MenuIcons(props: IIcon) {
  const {
    className,
  } = props
  return (
    <svg className={className} width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
      <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
      <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
    </svg>

  );
}
