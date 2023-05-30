import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { EIcon, Icon } from '../Icon';
import { useDispatch } from 'react-redux';
import { setSignOutState } from '../../features/user/userSlice';
import { INavMenu } from '../../types/interface';
import { auth } from '../../firebase';


const classAfter = 'relative tracking-[1.5px]  group-hover/edit:after:w-[100%] after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:bg-white after:w-[0%] after:transition-all after:ease-in-out after:duration-150'

export default function NavMenu(props: INavMenu) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleOut() {

    if (props.userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate('/');
        })
        .catch((err) => alert(err.message));
    }
  }

  return ( 
    <>
      <nav className='flex max-lg:hidden'>
        <ul className='flex'>
          <li className='group/item flex justify-between mr-[35px] items-center'>
            <Link to="/home" className='flex group/edit items-center'>
              <Icon name={EIcon.Home}></Icon>
              <span 
              className={classAfter}>
                HOME
              </span>
            </Link>
          </li>
          <li className='group/item flex justify-between mr-[35px] items-center'>
            <Link to="/" className='flex group/edit items-center'>
              <Icon name={EIcon.Search}></Icon>
              <span 
              className={classAfter}>
                SEARCH
              </span>
            </Link>
          </li>
          <li className='group/item flex justify-between mr-[35px] items-center'>
            <Link to="/" className='flex group/edit items-center'>
              <Icon name={EIcon.WatchList}></Icon>
              <span 
              className={classAfter}>
                WATCHLIST
              </span>
            </Link>
          </li>
          <li className='group/item flex justify-between mr-[35px] items-center'>
            <Link to="/" className='flex group/edit items-center'>
              <Icon name={EIcon.Original}></Icon>
              <span 
              className={classAfter}>
                ORIGINAL
              </span>
            </Link>
          </li>
          <li className='group/item flex justify-between mr-[35px] items-center'>
            <Link to="/" className='flex group/edit items-center'>
              <Icon name={EIcon.Movies}></Icon>
              <span 
              className={classAfter}>
                MOVIES
              </span>
            </Link>
          </li>
          <li className='group/item flex justify-between items-center'>
            <Link to="/" className='flex group/edit items-center'>
              <Icon name={EIcon.Series} className='mr-[15px]'></Icon>
              <span 
              className={classAfter}>
                SERIES
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='w-[70px] h-[70px] relative group/item p-[10px] ml-auto'>
        <img src={props.userPhoto} alt={props.userName}  className='rounded-[50%] group/edit'/>
        <div className='group-hover/item:opacity-[1] opacity-[0]  group/item absolute bottom-[-40px] left-[-30%] bg-black border-solid border-white border-[1px] p-[10px] rounded-[4px] cursor-pointer transition-all ease-in-out duration-150 hover:bg-white hover:text-black hover:border-black'>
            <span onClick={handleOut}>SIGN&nbsp;OUT</span>
        </div>
      </div>
    </>
   );
}
