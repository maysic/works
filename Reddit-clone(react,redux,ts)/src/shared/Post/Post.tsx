import React, { useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import { CommentsForPost } from './CommentsForPost';
import {useHistory, useParams} from 'react-router-dom'
import styles from './post.css';

interface IPost {
  id?:string
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null)
  const history = useHistory()
  let { id } = useParams<{ id: string }>()
  console.log(id);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target))
      // history.push('/')
      history.goBack()

    }
    document.addEventListener('click', handleClick )

    console.log(props.id);

    return ()=> {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  console.log(props.id);

  const node = document.querySelector('#modal_root');
  if(!node) return null

  

  return ReactDOM.createPortal ((
    <div className={styles.modal} ref={ref} >
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, reprehenderit.
      </h2>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consequatur ducimus, mollitia nam provident fugiat est a veritatis, veniam, distinctio nisi voluptatum placeat quidem? Quisquam possimus a nam porro qui?
        </p>
        <p>
          Tenetur, nam! Temporibus nostrum delectus at aspernatur eligendi quibusdam corporis cum necessitatibus optio voluptates, perspiciatis praesentium expedita amet omnis? Odit numquam, iusto pariatur reiciendis veritatis suscipit cupiditate aut? Libero, facere!
        </p>
        <p>
          Omnis repudiandae velit ipsum cumque at in. Adipisci reprehenderit facere tempora consequuntur quibusdam vero magnam error, molestias assumenda rerum saepe distinctio est accusantium odio ut harum, debitis expedita, dolore consectetur.
        </p>
      </div>

      <CommentFormContainer/>

      <CommentsForPost id={id}/>

      
    </div>), node);
}
