import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { IMovies } from '../../types/interface';

export default function DetailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const detail: IMovies = location.state
  const handleBack = () => navigate(-1)
  return ( 
    <div className= 'pt-[100px] w-full h-full relative]'>
      
      <img src={detail.backgroundImg} alt={detail.title}  className='w-full h-full fixed -z-10 object-cover'/>
      <div className='pt-[10%] pb-[10%]  pl-[10%] pr-[10%] md:pr-[20%]  md:pl-[20%] h-full flex flex-col justify-between'>
        <div>
          <img src={detail.titleImg} alt={detail.title}  className='w-[200px] h-[120px] mb-[30px]'/>
          <p className='text-white w-[100%] lg:w-[60%] leading-[32px] text-[20px] mb-[20px]'>
            {detail.description}
          </p>
          <div className='flex mb-[30px] flex-wrap justify-center md:justify-start'>
            <button className='group py-4 px-6  mr-[15px] mb-[15px] rounded-[4px] bg-white flex cursor-pointer justify-center items-center transition-all duration-200 ease-linear hover:bg-btn-hov ' >
              <svg className='group-hover:fill-white fill-black w-[20px] h-[20px] mr-[10px]' 
              width="41" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.87679e-05 4.94743C4.87629e-05 1.86822 3.33338 -0.0562729 6.00005 1.48333L39.0001 20.5359C41.6667 22.0755 41.6667 25.9245 39 27.4641L6.00005 46.5166C3.33338 48.0563 4.88353e-05 46.1317 4.88303e-05 43.0525L4.87679e-05 4.94743Z"/>
              </svg>
              <span className='text-black text-xl tracking-[1.8px] group-hover:text-white'>
                Play 
              </span>  
            </button>
            <button className='group py-4 px-6  mr-[15px] mb-[15px] rounded-[4px] bg-trailer flex cursor-pointer justify-center items-center transition-all duration-200 ease-linear hover:bg-btn-hov  border-[1px] border-white hover:border-black' >
              <svg className='group-hover:fill-white fill-white w-[20px] h-[20px] mr-[10px]' 
              width="41" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.87679e-05 4.94743C4.87629e-05 1.86822 3.33338 -0.0562729 6.00005 1.48333L39.0001 20.5359C41.6667 22.0755 41.6667 25.9245 39 27.4641L6.00005 46.5166C3.33338 48.0563 4.88353e-05 46.1317 4.88303e-05 43.0525L4.87679e-05 4.94743Z"/>
              </svg>
              <span className='text-white text-xl tracking-[1.8px] group-hover:text-black'>
                Trailer
              </span>  
            </button>
           <div className='flex items-center'>
              <button className='group p-6 mr-[15px] mb-[15px] rounded-[50%] border-[1px] border-white bg-trailer hover:border-black hover:bg-btn-hov transition-all duration-200 ease-linear '>
                <svg  className='group-hover:fill-black fill-white w-[20px] h-[20px]'  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.251 6.55957V9.1084H0.631836V6.55957H15.251ZM9.30371 0.333984V15.8613H6.59375V0.333984H9.30371Z"/>
                </svg>
              </button>.
              <button className='group p-4 mr-[15px] mb-[15px] rounded-[50%] border-[1px] border-white bg-trailer hover:border-black hover:bg-btn-hov transition-all duration-200 ease-linear'>
              <svg className='group-hover:fill-black  fill-white w-[36px] h-[36px]' version="1.1" id="Layer_1" 
                   viewBox="924 565.952 200 200" enable-background="new 924 565.952 200 200">
                <g>
                  <g>
                    <path d="M984.585,626.893c0,14-9.609,25.348-21.461,25.348s-21.459-11.348-21.459-25.348c0-13.999,9.607-25.345,21.459-25.345
                      S984.585,612.895,984.585,626.893z"/>
                    <path d="M987.586,671.591c1.549-0.945,3.265-1.56,5.041-1.854c-3.606-5.088-6.161-10.546-7.637-17.078
                      c-0.404-2.387-3.672-2.667-6.102-0.687c-4.545,3.706-9.849,6.186-15.764,6.186c-6.03,0-11.577-2.399-16.025-6.414
                      c-1.419-1.283-3.51-1.476-5.142-0.479c-8.444,5.157-14.835,13.344-17.623,23.064c-0.748,2.607-0.223,5.421,1.411,7.59
                      c1.637,2.166,4.192,3.443,6.906,3.443h38.669C975.947,680.023,981.41,675.362,987.586,671.591z"/>
                  </g>
                  <g>
                    <path d="M1063.414,626.893c0,14,9.61,25.348,21.462,25.348s21.46-11.348,21.46-25.348c0-13.999-9.608-25.345-21.46-25.345
                      S1063.414,612.895,1063.414,626.893z"/>
                    <path d="M1060.413,671.591c-1.549-0.945-3.264-1.56-5.04-1.854c3.605-5.088,6.16-10.546,7.637-17.078
                      c0.404-2.387,3.674-2.667,6.103-0.687c4.545,3.706,9.849,6.186,15.764,6.186c6.03,0,11.576-2.399,16.024-6.414
                      c1.42-1.283,3.51-1.476,5.143-0.479c8.443,5.157,14.834,13.344,17.623,23.064c0.748,2.608,0.222,5.421-1.412,7.59
                      c-1.635,2.166-4.192,3.443-6.906,3.443h-38.668C1072.052,680.023,1066.59,675.362,1060.413,671.591z"/>
                  </g>
                  <g>
                    <path d="M1082.474,713.402c-4.198-14.654-13.72-27.044-26.327-34.991c-2.487-1.567-5.715-1.313-7.921,0.631
                      c-6.765,5.958-15.136,9.506-24.226,9.506c-9.268,0-17.791-3.686-24.626-9.856c-2.181-1.97-5.393-2.267-7.901-0.734
                      c-12.977,7.925-22.8,20.505-27.082,35.445c-1.151,4.008-0.344,8.329,2.166,11.663c2.516,3.329,6.443,5.29,10.615,5.29h92.521
                      c4.173,0,8.103-1.954,10.618-5.29C1082.822,721.731,1083.625,717.414,1082.474,713.402z"/>
                    <path d="M1056.98,640.499c0,21.512-14.767,38.955-32.98,38.955s-32.979-17.442-32.979-38.955
                      c0-21.515,14.765-38.951,32.979-38.951S1056.98,618.984,1056.98,640.499z"/>
                  </g>
                </g>
                </svg>
              </button>
           </div>
          </div>
          <p className='text-white mb-[30px]'>
            {detail.subTitle}
          </p>
        </div>
        <button className='bg-white p-3  w-[150px] rounded-[4px] text-black text-xl cursor-pointer hover:bg-btn-hov hover:text-white transition-all duration-200 ease-linear' onClick={handleBack}>
          GO BACK
        </button>
      </div>
    </div> 
    );
}

 ;