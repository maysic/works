import React from 'react'
import { IMovies } from '../../types/interface';
import { Link } from 'react-router-dom';


export default function Movie(props: IMovies) {
  const items = 'basis-[45%]  md:basis-[20%] border-[5px] mb-[30px] md:mb-0 rounded-[10px] border-recom border-solid hover:border-white transition-all duration-250 easy-in'
  return ( 
    <div  key={props.id} className={items}>
      <Link to={`/detail/${props.id}`} state={props}>
        <img src={props.cardImg} alt={props.title} />
      </Link>
    </div>
   );
}

 ;