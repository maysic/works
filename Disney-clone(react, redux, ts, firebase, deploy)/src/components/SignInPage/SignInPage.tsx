import ImgSlider from './ImgSlider';
import BrandList from './BrandList';
import Recommends from './Recommends';

import { useCollection } from '../../hooks/useCollection';


export default function SignInPage () {
  useCollection();

   
  return ( 
    <section className='w-[100%] h-[100%] pt-[100px] bg-back-page relative'>
      <div className='w-[100%] h-[100%] fixed -z-10 bg-main-back'/>
      <ImgSlider/>
      <div className='max-w-[1600px] mx-auto px-[5%]'>
        <BrandList/>
        <Recommends/>
      </div>
    </section>
   );
}

 ;