import React, { ChangeEvent} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, updateComment } from '../../store/store';
import { CommentForm } from '../CommentForm/CommentForm';
import styles from './commentformcontainer.css';



export function CommentFormContainer() {
  // const value = useSelector<RootState, string>(state => state.commentText);

  // console.log(value);
  // const dispatch = useDispatch()



  

  return (
    <CommentForm
      // value={value}
      // onChange={handleChange}
    />
  );
}

