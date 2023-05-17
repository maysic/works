import React from 'react';
import { Dropdown } from '../../../Dropdown';
import styles from './menucard.css';
import { EIcon, Icon } from '../../../Icon';


export function MenuCard() {
  return (
    <div className={styles.menu}>
      <Dropdown 
      button= {
        <button className={styles.menuButton}>
          <Icon name={EIcon.menu} size={14}></Icon>
        </button>
      }>

          
        
      </Dropdown>
       
    </div>
  );
}
