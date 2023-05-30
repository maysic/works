import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, setUserLoginDetails } from '../../features/user/userSlice';
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { TUser } from '../../types/interface'



export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  function handleAuth (e: any) {
    e.preventDefault()
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result: any) => {
          console.log(result);
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } 
  };

  const setUser = (user: TUser) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


  useEffect(() => {
    auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [navigate, userName]);

  return ( 
    <>
      <a href='/' onClick={handleAuth} className='flex justify-center items-center self-end w-[130px] h-[40px] text-white border-solid border-[1px] border-white rounded-[4px] hover:bg-white hover:text-black transition-all ease-in-out duration-300 tracking-[1.5px]'>LOGIN</a>
    </>

   );
}

 ;