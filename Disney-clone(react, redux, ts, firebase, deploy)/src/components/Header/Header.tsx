import React from 'react'
import {Link} from 'react-router-dom';
import { EIcon, Icon } from '../Icon';
import Login from './Login';
import { useSelector} from 'react-redux';

import {
  selectUserName,
  selectUserPhoto,
} from "../../features/user/userSlice";
import NavMenu from './NavMenu';


export default function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  
  return ( 
    <div className='flex p-5 px-[20px]  bg-main-back text-white h-[100px] items-center fixed w-[100vw] z-50 sm:px-[50px]'>
      <div className='flex items-center justify-between w-[100%]'>
          <Link to='/' className='inline-block mr-[15px]'>
            <Icon name={EIcon.Logo}></Icon>
          </Link>
            { !userName ? (

              <Login/>
            ) : (
              <div className='flex justify-between basis-[93%]'>
                <NavMenu userName={userName} userPhoto={userPhoto}/>
              </div>
            )
            }    
      </div>

      
    </div>
   );
}

