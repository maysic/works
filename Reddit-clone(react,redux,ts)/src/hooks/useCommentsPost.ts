import  { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/token.Context';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


export interface ICommentPost {
  comment?: any
  id?:string
}


export function useCommentsPost(props: ICommentPost) {
  const [commentPost, setCommentPost] = useState<ICommentPost>({});
  const token = useSelector<RootState, string>(state => state.token.token);

  console.log(props.id);
  useEffect(()=> {
    if(!token || token == 'undefined') return
    axios.get(`https://oauth.reddit.com/comments/${props.id}`, {
      headers: {Authorization: `bearer ${token}`}
    })
    .then((resp)=> {
      const commentPost = resp.data

      console.log(commentPost);
      setCommentPost({
        comment: commentPost[1].data.children.map((elem:any)=> elem)
      })
    })
    .catch(console.log)
  }, [token])

  // console.log(commentPost);

  return [commentPost];
}

