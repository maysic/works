import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IUserData, meRequestAsync, meRequestError, meRequestSuccess } from "../store/me/actions";



export function useUserData () {
  const data = useSelector<RootState, IUserData>(state => state.me.data)
  const loading = useSelector<RootState, boolean>(state => state.me.loading)
  // console.log(data);

  const token = useSelector<RootState, string>(state => state.token.token);
  // console.log(token);
  const dispatch = useDispatch()


  useEffect(()=> {
    if(!token || token === 'undefined') return
    dispatch(meRequestAsync())
    }, [token])

    
  return {
    data,
    loading
  }
} 