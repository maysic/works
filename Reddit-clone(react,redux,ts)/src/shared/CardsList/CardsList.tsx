import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { postContext } from '../context/postContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { NoPost } from './NoPost';



export function CardsList() {
  const post = useContext(postContext)
  let postList: Array<any> = []
    if (post !== undefined) {
      postList = Object.values(post)[0]
    }

  const token = useSelector<RootState>(state => state.token.token)
  const [postsRising, setPostsRising] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorLoading, seterrorLoading] = useState('')
  const [nextAfter, setNextAfter] = useState('')
  const [countLoad, setCountLoad] = useState(0)
  const bottomOfList = useRef<HTMLDivElement>(null)

  function handleLoad() {
    setCountLoad(0)
  }

  useEffect(() => {
    async function load() {
      setLoading(true)
      seterrorLoading('')
      try {

        const {data: { data: {after, children} }} = await axios.get('https://oauth.reddit.com/rising/', {
          headers: {Authorization: `bearer ${token}`},
          params : {
            limit: 10,
            sr_detail: true,
            after: nextAfter
          }
          })
        setNextAfter(after)
        setPostsRising(prevChildren => prevChildren.concat(...children) )
        setCountLoad(prev => prev + 1)
        console.log(countLoad);
      } catch (error) {
        seterrorLoading(String(error))
      }
      setLoading(false)
    } 

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting)
      load();
    }, {
      rootMargin: '10px',
    })
    if (bottomOfList.current && countLoad < 3) {
      observer.observe(bottomOfList.current)
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  },[bottomOfList.current, token, nextAfter, countLoad])


  return (
    <>
        <ul className={styles.cardsList}>
        {/* {post && postList
        ? postList[0].map((post:any)=> (
            <Card 
            id={post.data.id}
            key={post.data.id}
            title = {post.data.title}
            author = {post.data.author_fullname}
            thumbnail = {post.data.thumbnail}
            ups ={post.data.ups}
            icon_img = {post.data.sr_detail.icon_img}
            />
          ))
        : <NoPost/>
        } */}

        {postsRising.length === 0 && !loading &&  (
          <NoPost/>
        )}

        {postsRising.map( (post:any) => (
          <Card 
          id={post.data.id}
          key={post.data.id}
          title = {post.data.title}
          author = {post.data.author_fullname}
          thumbnail = {post.data.thumbnail}
          ups ={post.data.ups}
          icon_img = {post.data.sr_detail.icon_img}
          />
        ))}


        <div ref={bottomOfList}></div>

        

        {loading && <div className={styles.loading}>
          Загрузка...
          </div>}


        {/* {errorLoading && 
          <div role='alert' style={{textAlign: 'center'}}>
              {errorLoading}
          </div>
        } */}



      </ul>
      {countLoad == 3 && 
        <div className={styles.newLoad}>
          <button 
            className={styles.startLoad}
            onClick={handleLoad}
            >
            Загрузить еще...
          </button>
        </div>}
    </>
  );
  
}
