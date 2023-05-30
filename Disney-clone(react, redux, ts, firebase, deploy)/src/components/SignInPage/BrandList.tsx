import React from 'react'



export default function BrandList() {
  const brandStyle = 'group/item lg:basis-[15%] md:basis-[30%] mb-[30px] lg:mb-0 basis-[100%] py-[100px] md:py-[64px] mr-[20px] lg:mr-0  relative rounded-[10px] border-[3px] border-solid border-bd shadow-my transition-all duration-250 easy-in hover:border-white cursor-pointer hover:scale-105'
  const imgStyle = 'absolute inset-0 w-[100%] h-[100%] opacity-1 z-30 transition-all duration-500 easy-in'
  const videoStyle = 'group/edit group-hover/item:z-20 group-hover/item:opacity-[1] absolute inset-0  w-full object-cover h-full opacity-0 -z-10 transition-all duration-500 easy-in'
  return ( 
    <ul className='flex w-[100%] list-none justify-center lg:justify-between items-center mb-[50px] flex-wrap'>
      <li className={brandStyle}>
        <img src="./images/disney.png" alt="disney" className={imgStyle} />
        <video autoPlay={true} loop={true} playsInline={true} className={videoStyle}>
          <source src='./videos/disney.mp4' type='video/mp4'/>
        </video>
      </li>
      <li className={brandStyle}>
        <img src="./images/pixar.png" alt="pixar" className={imgStyle} />
        <video autoPlay={true} loop={true} playsInline={true} className={videoStyle}>
          <source src='./videos/pixar.mp4' type='video/mp4'/>
        </video>
      </li>
      <li className={brandStyle}>
        <img src="./images/marvel.png" alt="marvel" className={imgStyle} />
        <video autoPlay={true} loop={true} playsInline={true} className={videoStyle}>
          <source src='./videos/marvel.mp4' type='video/mp4'/>
        </video>
      </li>
      <li className={brandStyle}>
        <img src="./images/starwars.png" alt="starwars" className={imgStyle} />
        <video autoPlay={true} loop={true} playsInline={true} className={videoStyle}>
          <source src='./videos/star-wars.mp4' type='video/mp4'/>
        </video>
      </li>
      <li className={brandStyle}>
        <img src="./images/national.png" alt="national" className={imgStyle} />
        <video autoPlay={true} loop={true} playsInline={true} className={videoStyle}>
          <source src='./videos/national.mp4' type='video/mp4'/>
        </video>
      </li>
    </ul>
   );
}

