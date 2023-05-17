import React, { useState, useRef, useEffect } from 'react';
import { Break } from '../../../Break';
import { CommentForm } from '../../../CommentForm';
import { CommentFormContainer } from '../../../CommentFormContainer';
import { EIcon, Icon } from '../../../Icon';
import { EColor, Text } from '../../../Text';
import styles from './commnetuser.css';

interface ICommentUser {
  author?: string
  body?:string
  comment?: any

}

export function CommnetUser({author, body, comment} : ICommentUser) {
  const [isResponseForm, setisResponseForm ] = useState(false);
  const isActiveInput = useRef<HTMLInputElement>(null)

  useEffect(()=> {
    const clickFocus = () => isActiveInput.current?.focus();
    clickFocus()
  }, [isResponseForm])


  return (

      <div className={styles.main}>
        <div className={styles.commentUser}>
          <div className={styles.metaData}>
            <span className={styles.createdAt}>
              <span className={styles.publishedLabel}>опубликовано</span>
              {new Date(comment.data.created).toLocaleString()}
            </span>
            <div className={styles.userLink}>
              <img src="" alt="avatar" className={styles.avatar}/>
              <a href="#user-url" className={styles.username}>
                {author}
              </a>
            </div>
          </div>
          <p className={styles.body_text}>
            {body}
          </p>
          <div className={styles.action}>
            <button className={styles.btn} onClick={()=> {
              setisResponseForm(!isResponseForm)
            }}>
              <Icon name={EIcon.comment} size={16}></Icon>
              <Text size={14} color={EColor.grey99}>Ответить</Text>
            </button>
            <button className={styles.btn}>
              <Icon name={EIcon.send} size={16}></Icon>
              <Text size={14} color={EColor.grey99}>Поделиться</Text>
            </button>
            <button className={styles.btn}>
              <Icon name={EIcon.warning} size={16}></Icon>
              <Text size={14} color={EColor.grey99}>Пожаловаться</Text>
            </button>
          </div>

          <Break size={20}/>  
          <div>
            {isResponseForm && (
              <CommentForm isActiveInput={isActiveInput}
              commentAuthor={comment.data.author}
              />
            )}
          </div>

          <ul>
            {comment.data.replies
            ? comment.data.replies.data.children.map((comment:any)=> {
              return(
                <CommnetUser 
                key={comment.data.id}
                author={comment.data.author}
                body={comment.data.body}
                comment={comment}
                />
              )
            })
            :[]
          }
          </ul>
        </div>
      </div>

  );
}
