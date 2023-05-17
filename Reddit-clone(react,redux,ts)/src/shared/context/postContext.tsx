import * as React from 'react';
import { IPostsData, usePostData } from '../../hooks/usePostData';


export const postContext = React.createContext<IPostsData>({})

export function PostContextProvider ({children}: {children:React.ReactNode}) {

  const [post] = usePostData()
  console.log(post);

  return (

      <postContext.Provider value={post}>
        {children}
      </postContext.Provider>

  )
}
