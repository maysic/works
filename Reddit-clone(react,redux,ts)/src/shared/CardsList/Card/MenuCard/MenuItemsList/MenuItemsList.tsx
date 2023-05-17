import React from 'react';
import { BlockIcon, CommentIcon, SaveIcon, SendIcon, WarningIcon } from '../../../../icons/MenuIcons';
import { EColor, Text } from '../../../../Text';
import styles from './menuitemslist.css';
import classNames from 'classnames';
import { EIcon } from '../../../../Icon';
import { Icon } from '../../../../Icon';

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemList({postId}:IMenuItemsListProps) {
  return (
    <>
      <ul className={styles.menuItemsList}>
        <li className={classNames(styles.hide, styles.menuItem)} onClick={()=> console.log(postId)}>
          <Icon name={EIcon.comment} size={16}></Icon>
          <Text size={12} color={EColor.grey99}>Комментарии</Text>
        </li >
        
        <div className={styles.divider} ></div>

        <li className={classNames(styles.hide, styles.menuItem)} onClick={()=> console.log(postId)}>
        <Icon name={EIcon.send} size={16}></Icon>
          <Text size={12} color={EColor.grey99}>Поделиться</Text>
        </li >

        <div className={styles.divider}></div>

        <li className={classNames(styles.menuItem)} onClick={()=> console.log(postId)}>
          <Icon name={EIcon.block} size={16}></Icon>
          <Text size={12} color={EColor.grey99}>Скрыть</Text>
        </li >

        <div className={styles.divider}></div>

        <li className={classNames(styles.hide, styles.menuItem)} onClick={()=> console.log(postId)}>
        <Icon name={EIcon.save} size={16}></Icon>
          <Text size={12} color={EColor.grey99}>Сохранить</Text>
        </li >

        <div className={styles.divider}></div>

        <li className={styles.menuItem}>
          <Icon name={EIcon.warning} size={16}></Icon>
          <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
        </li>
      </ul>
    </>
  );
}
