import * as React from 'react';
import { IIcon } from '../../types/interface';




export function Home(props: IIcon) {

  return ( 
    <svg  className={props.className} aria-hidden="true" aria-label="home" color="#fff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="HOME" ><path d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z" fill='white'></path></svg>
    );
};