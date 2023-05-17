import React, { ChangeEvent } from 'react';
import { useCommentForm } from '../../hooks/useCommentForm';
import { getValueTextArea } from '../../utils/react/pickFromSynteticEvent';
import styles from './commentform.css';
import {useForm} from 'react-hook-form'
import {makeAutoObservable } from 'mobx'
import { observer } from "mobx-react-lite"




// MobX

class Comment {
  value = 'Привет из MobX';

  constructor() {
    makeAutoObservable(this)
  }

  updateValue(newValue:string) {
    this.value = newValue
  }
}

const myComment = new Comment()





interface ICommentForm {
  isActiveInput?: any
  commentAuthor?: string
  value?: string
  // onChange?: (event: ChangeEvent<HTMLTextAreaElement>)=> void
  // onSubmit?: () => void
}

//при использовании MobX функцию нужно обернуть в observer
export const CommentForm = observer(({isActiveInput, commentAuthor}:ICommentForm) => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onTouched'
  })
  


   function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //MobX
    myComment.updateValue(event.target.value)

  }





  const onSubmit = (data: any) => {
    alert(JSON.stringify(data)); 
    reset()  
  }
  
  const {name, onChangeAuthorComment} = useCommentForm(commentAuthor)
  const NameLenght = name.split(' , ')
  
  const { ref, ...rest } = register('comment',
    {
      onChange: getValueTextArea(onChangeAuthorComment),
      minLength: {
        value: NameLenght[0].length + 4,
        message: 'Напишите комментарий'
      }
    },
  );

  const {...comment} = register('mainComment',  {
    onChange: handleChange,
    minLength: {
      value: 7,
      message: 'Напишите комментарий'
    }
  },)

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        {errors?.comment && <p className={styles.error}>{errors?.comment?.message || "Error!"}</p>}
        {errors?.mainComment && <p className={styles.error}>{errors?.mainComment?.message || "Error!"}</p>}
      </div>
      {isActiveInput
      ?  <textarea 
        className={styles.input}
        value={name}
        {...rest}
        ref={(e) => {
          ref(e)
          e?.focus()    
        }} 

        />     
      :  <textarea
        className={styles.input}
        value={myComment.value}
        {...comment}
        />
      }
     
      <button type="submit" className={styles.button}>Комментировать</button>
    </form>
  );
})
