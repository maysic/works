import classNames from 'classnames';
import React from 'react';
import { AnonIcon, BlockIcon, CommentIcon, MenuIcons, SaveIcon, SendIcon, WarningIcon } from '../icons/MenuIcons';
import styles from './icon.css';

export enum EIcon {
  block = 'block',
  comment = 'comment',
  menu = 'menu',
  save = 'save',
  send = 'send',
  warning = 'warning',
  anon = 'anon'

}

type TIcon = 14 | 16 | 18 | 30 | 50


interface IIconprops {
  size: TIcon;
  name?: EIcon,
  mobileSize?: TIcon,
  className?: string
}

export function Icon(props: IIconprops) {
  const {
    size,
    name,
    mobileSize,
    className
  } = props

  const classes = classNames (
    styles[`s${size}`],
    className,
    { [styles[`m${mobileSize}`]]: mobileSize}
  )

  switch (name) {
    case EIcon.block: 
      return <BlockIcon className={classes}/>

    case EIcon.comment: 
      return <CommentIcon className={classes}/>

     case EIcon.block: 
      return <MenuIcons className={classes}/>

    case EIcon.save: 
      return <SaveIcon className={classes}/>

    case EIcon.send: 
      return <SendIcon className={classes}/>

    case EIcon.warning: 
      return <WarningIcon className={classes}/>

    case EIcon.menu: 
      return <MenuIcons className={classes}/>

    case EIcon.anon: 
      return <AnonIcon className={classes}/>
  
    default: break
  }
  return (
    <>
    </>
  );
}
