import React from 'react';
import styles from './text.css';
import classNames from 'classnames'


export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyEC = 'greyEC',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div'
  children?: React.ReactNode;
  size: TSizes
  modileSize?: TSizes
  tabletSize?: TSizes
  desktopSize?: TSizes
  color?: EColor
  bold?: boolean
} 

export function Text(props: ITextProps) {
  const {
    As = 'span',
    color = EColor.black,
    bold = false,
    children,
    size,
    modileSize,
    tabletSize,
    desktopSize
    } = props
  const classes = classNames(
    styles[`s${size}`],
    {[styles.bold]: bold},
    {[styles[`m${modileSize}`]]: modileSize},
    {[styles[`m${tabletSize}`]]: tabletSize},
    {[styles[`m${desktopSize}`]]: desktopSize},
    styles[color],

  );

  return (
    <As className={classes}>
      {children}
    </As>
  );
}
