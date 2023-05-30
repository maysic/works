import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import { IMovies } from '../types/interface';



export function useCollection() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends: Array<IMovies> = []
  let newDisneys: Array<IMovies> = []
  let originals: Array<IMovies> = []
  let trending: Array<IMovies> = []

  useEffect(()=>{
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        const dataMovie: IMovies = {
          id: doc.id,
          backgroundImg: doc.data().backgroundImg,
          cardImg: doc.data().cardImg,
          description: doc.data().description,
          subTitle: doc.data().subTitle,
          title: doc.data().title,
          titleImg: doc.data().titleImg,
          type: doc.data().type,
        }
        switch(doc.data().type) {
          case 'recommend':
            recommends = [...recommends, dataMovie];
            // dispatch(setMovies({recommend: recommends}))
            // console.log(recommends);
            break;
          case 'new':
            newDisneys = [...newDisneys, dataMovie];
            // dispatch(setMovies({newDisney: newDisneys}))
            // console.log(newDisneys);
            break;
          case 'original':
            originals = [...originals, dataMovie];
            // dispatch(setMovies({original: originals}))
            console.log(originals);
            break;
          case 'trending':
            trending = [...trending, dataMovie];
            // dispatch(setMovies({trending: trending}))
            // console.log(trending);
            break;
          }
          dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending
          }))
      })
    })
    
  }, [userName])
}


