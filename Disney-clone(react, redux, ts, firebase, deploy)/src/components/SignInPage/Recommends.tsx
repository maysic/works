import React from 'react'
import { IMovies } from '../../types/interface';
import { useSelector } from 'react-redux';
import { SelectNewDisney, SelectOriginal, SelectRecommend, SelectTrending } from '../../features/movie/movieSlice';
import Movie from './Movie';

export default function Recommends() {
  const recommend: IMovies[] = useSelector(SelectRecommend)
  const newDisney: IMovies[] = useSelector(SelectNewDisney)
  const original: IMovies[] = useSelector(SelectOriginal)
  const trending: IMovies[] = useSelector(SelectTrending)
  const listStyle = 'flex justify-between items-center pb-[30px] flex-wrap'
  return ( 
    <>
      {recommend ? (
        <div className='w-[100%]'> 
          <h4 className='text-white text-xl mb-0 md:mb-[30px]'>Recommended for You</h4>
          <div className={listStyle}>
            {recommend.map((movie: IMovies) => (
                <Movie 
                id={movie.id}
                cardImg={movie.cardImg}
                backgroundImg={movie.backgroundImg}
                description={movie.description}
                subTitle={movie.subTitle}
                title={movie.title}
                titleImg={movie.titleImg}
                  />
            ))}
          </div>
        </div>
      )
      : (<></>)}

      {newDisney ? (
        <div className='w-[100%]'> 
          <h4 className='text-white text-xl mb-[30px]'>New Disney+</h4>
          <div className={listStyle}>
            {newDisney.map((movie: IMovies) => (
                <Movie 
                id={movie.id}
                cardImg={movie.cardImg}
                backgroundImg={movie.backgroundImg}
                description={movie.description}
                subTitle={movie.subTitle}
                title={movie.title}
                titleImg={movie.titleImg}
                  />
            ))}
          </div>
        </div>
      )
      : (<></>)}


      {original ? (
        <div className='w-[100%]'> 
          <h4 className='text-white text-xl mb-[30px]'>Original</h4>
          <div className={listStyle}>
            {original.map((movie: IMovies) => (
                <Movie 
                id={movie.id}
                cardImg={movie.cardImg}
                backgroundImg={movie.backgroundImg}
                description={movie.description}
                subTitle={movie.subTitle}
                title={movie.title}
                titleImg={movie.titleImg}
                  />
            ))}
          </div>
        </div>
      )
      : (<></>)}

      {trending ? (
        <div className='w-[100%]'> 
          <h4 className='text-white text-xl mb-[30px]'>Trending</h4>
          <div className={listStyle}>
            {trending.map((movie: IMovies) => (
                <Movie 
                id={movie.id}
                cardImg={movie.cardImg}
                backgroundImg={movie.backgroundImg}
                description={movie.description}
                subTitle={movie.subTitle}
                title={movie.title}
                titleImg={movie.titleImg}
                  />
            ))}
          </div>
        </div>
      )
      : (<></>)}


    </>
   );
}
