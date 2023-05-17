import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/token.Context";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export interface IPostsData {
  post?:Array<any>
}

export function usePostData(){
  const [postsData, setPostData] = useState<IPostsData>({})
  const token = useSelector<RootState, string>(state => state.token.token);
  useEffect(()=> {
    if(!token || token == 'undefined') return
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true&limit=5', {
      headers: {Authorization: `bearer ${token}`}
      })
      .then((resp)=> {
        const postsData = resp.data
        
        // console.log(postsData);
        setPostData({
          post: [postsData.data.children].map((elem)=> elem)
        })
      })
  }, [token])
  console.log(postsData);
  return [postsData];
}


