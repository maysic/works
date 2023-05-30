import React from 'react'
import { EIcon, Icon } from '../Icon';

export default function HomePage() {
  return ( 
    <section className='w-100 h-[100vh] relative flex justify-center items-center'>
      <img src="./images/login-background.jpg" alt="back" className='w-[100%] h-[100%] absolute -z-10'/>
      <div className='flex-col flex max-w-[300px] w-[100%] sm:max-w-[570px]'>
        <Icon name={EIcon.PageLogo}/>
        <button className='flex justify-center items-center text-white bg-blue-btn p-[20px] tracking-[2.5px] text-[18px] rounded-[4px] hover:bg-blue-500 transition-all ease-out duration-100 mb-[20px]'>
          GET ALL THERE
        </button>
        <p className='text-white tracking-[1.5px] text-center mb-[20px]'>
          Disney+ is asubscription video on-demand streaming service operated by the Media and Entertainment Distribution division of The Walt Disney Company.
        </p>
        <img src="./images/cta-logo-two.png" alt="logo2" className='w-[100%]' />
      </div>
    </section>
   );
}
