import React from 'react';
import { useCommentsPost } from '../../../hooks/useCommentsPost';
import { Break } from '../../Break';
import styles from './commentsforpost.css';
import { CommnetUser } from './CommnetUser';

interface ICommentsForPost {
  id?:string
}

export function CommentsForPost(id: ICommentsForPost) {
  const comments : Array<any> = useCommentsPost(id)
  let commentList: Array<any> = []
  if (comments !== undefined) {
    commentList = Object.values(comments)[0].comment
  }

  console.log('list',commentList);
  
  return (
      <div>
      {comments && commentList
      ? 
      commentList.map((comment:any) => {
            return (
              <CommnetUser 
              key={comment.data.id}
              author={comment.data.author}
              body={comment.data.body}
              comment={comment}
              />
            )
      
          }) 

      : []
      }
      <Break size={20}></Break>
    </div>
  );
}
