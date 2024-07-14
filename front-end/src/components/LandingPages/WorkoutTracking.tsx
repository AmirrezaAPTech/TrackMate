// import ProductImg from '../Img/ProductImg.webp'
import { useEffect, useState } from 'react';
// import WomanTrackingImg from '../../Img/WomanTrackingImg.webp'
import WomanTrackingImg2xl from '../../Img/WomanTrackingImg-2xl.webp'
import Icon2 from '../../Img/icon 2.webp'
import phoneImg from '../../Img/phone.webp'

const WorkoutTracking = () => {

    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const imageElement = document.querySelector('.image-container');
            const imagePosition = imageElement?.getBoundingClientRect().top || 0;
            const imageHeight = imageElement?.clientHeight || 0;
            const windowHeight = window.innerHeight;
            const distanceFromCenter = Math.abs(imagePosition + imageHeight / 2 - windowHeight / 2);

            // Calculate opacity based on image position relative to the center of the viewport
            const opacity =Math.min(1, distanceFromCenter / windowHeight);

            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="w-screen h-screen flex justify-between items-center">
                <div className='relative h-screen w-[72%] max-lg:w-full image-container'>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#232323] via-[#232323]/20 to-transparent w-full max-lg:w-full"style={{ backgroundColor: `rgba(35, 35, 35, ${scrollOpacity})` }}></div>
                    <img src={WomanTrackingImg2xl} alt="WomanTrackingImg" className="h-full w-full object-cover" />
                    <div className='absolute top-1/4 left-60 w-[600px] flex flex-col justify-center items-start gap-y-12'>
                      <div className='flex justify-center items-center gap-4'>
                      <img src={Icon2} alt="Icon 2" />
                      <p className='text-xl'>WORKOUT TRACKING</p>
                      </div>
                      <p className='text-6xl max-xl:text-5xl max-lg:text-4xl'>
                      Fine Tune Your Routine With Precise Workout Stats
                      </p>
                      <p className='text-lg font-semibold'>
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                      </p>
                    </div>
                </div>
                <div className='w-[3%] h-full bg-[#232323]'></div>
                <div id='landingPageB' className='relative w-[25%] max-lg:w-full h-screen'>
                    <div className='absolute -left-36 top-1/4'>
                    <img src={phoneImg} alt="phone" className='max-xl:w-[300px]'/>
                    </div>
                </div>
    </div>
  )
}

export default WorkoutTracking