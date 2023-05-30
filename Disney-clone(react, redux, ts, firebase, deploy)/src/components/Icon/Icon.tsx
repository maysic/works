import React from 'react';
import { Logo, Home, Search, WatchList, Original, Movies, Series, PageLogo } from '../Icons';

export enum EIcon {
  Logo = 'Logo',
  Home = 'Home',
  Search = 'Search',
  WatchList = 'WatchList',
  Original = 'Original',
  Movies = 'Movies',
  Series = 'Series',
  PageLogo = 'PageLogo'

}


interface IIconprops {
  name?: EIcon,
  className?: string
}

export function Icon(props: IIconprops) {
  const {
    name,
  } = props


  switch (name) {
    case EIcon.Logo: 
      return <Logo className='w-[100px] h-[50px] mr-[10px]'/>
    
    case EIcon.Home: 
      return <Home className='w-[20px] h-[20px] mr-[10px]'/>

    case EIcon.Search: 
      return <Search className='w-[20px] h-[20px] mr-[10px]'/>

    case EIcon.WatchList: 
      return <WatchList className='w-[20px] h-[20px] mr-[10px]'/>

    case EIcon.Original: 
      return <Original className='w-[20px] h-[20px] mr-[10px]'/>

    case EIcon.Movies: 
      return <Movies className='w-[20px] h-[20px] mr-[10px]'/>

    case EIcon.Series: 
      return <Series className='w-[20px] h-[20px] mr-[10px]'/>

    case EIcon.PageLogo: 
      return <PageLogo className='w-[100%] max-h-[132px] h-[100%] mb-[20px]'/>
  
    default: break
  }
  return (
    <>
    </>
  );
}
