import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { ActionsButtons } from './Controls/ActionsButtons';
import { CommentsButton } from './Controls/CommentsButton';
import { KarmaCounter } from './Controls/KarmaCounter';
import { ImgCard } from './ImgCard';
import { MenuCard } from './MenuCard';
import { TextCard } from './TextCard';
import { MetaData } from './TextCard/MetaData';
import { PostLink } from './TextCard/PostLink';

export interface ICard {
  id?: string
  title?: string
  author?: string
  thumbnail?: string
  ups?: number
  // created?: number
  icon_img?: string

}

export function Card({id, title, author, thumbnail, ups, icon_img}:ICard) {
  return (
    <li className={styles.card}>
      <TextCard>
        <MetaData author={author} icon_img={icon_img}/>
        <PostLink title={title} id={id}/>
      </TextCard>

      <ImgCard img={thumbnail}/>

      <MenuCard/>

      <Controls>
        <KarmaCounter counter={ups}/>

        <CommentsButton/>
        
        <ActionsButtons/>      
      </Controls>
           
    </li>
  );
}
