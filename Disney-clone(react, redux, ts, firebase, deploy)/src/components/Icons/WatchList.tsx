import * as React from 'react';
import { IIcon } from '../../types/interface';


export function WatchList(props: IIcon) {

  return ( 
    <svg className={props.className} aria-hidden="true" aria-label="watchlist" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="WATCHLIST" ><path d="M27.85 15.1H20.9V8.15a2.9 2.9 0 0 0-5.8 0v6.95H8.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V20.9h6.95a2.9 2.9 0 1 0 0-5.8z" fill='white'></path></svg>
    );
};