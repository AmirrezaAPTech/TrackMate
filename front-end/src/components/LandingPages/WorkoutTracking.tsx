import { useEffect, useState } from 'react';
// import WomanTrackingImg from '../../Img/WomanTrackingImg.webp'
import WomanTrackingImg2xl from '../../Img/WomanTrackingImg-2xl.webp'
import WomanTrackingImgMd from '../../Img/WomanTrackingImg-md.webp'
import WomanTrackingImgSm from '../../Img/WomanTrackingImg-sm.webp'
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
    <div className="w-screen xl:h-screen min-h-screen flex justify-between items-center flex-col xl:flex-row">
                <div className='relative h-screen w-full xl:w-[72%] lg:w-full image-container'>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#232323] via-[#232323]/20 to-transparent w-full max-lg:w-full"style={{ backgroundColor: `rgba(35, 35, 35, ${scrollOpacity})` }}></div>
                    <img src={WomanTrackingImg2xl} alt="WomanTrackingImg" className="h-full w-full object-cover hidden lg:block" />
                    <img src={WomanTrackingImgMd} alt="WomanTrackingImg" className="h-full w-full object-cover hidden max-lg:block max-sm:hidden" />
                    <img src={WomanTrackingImgSm} alt="WomanTrackingImg" className="h-full w-full object-cover hidden max-sm:block" />
                    <div className='absolute top-1/2 left-10 md:left-20 xl:left-52 transform -translate-y-1/2 max-sm:-translate-x-1/2 max-sm:left-1/2 w-[600px] min-[2260px]:w-[1200px] 2xl:w-[800px]  max-sm:w-[90%] flex flex-col justify-center items-start sm:gap-y-12 gap-y-8'>
                    <div className='flex justify-center items-center gap-4'>
                      <img src={Icon2} alt="Icon 2" />
                      <p className='text-xl min-[2260px]:text-3xl 2xl:text-2xl max-sm:text-lg max-[500px]:text-md'>WORKOUT TRACKING</p>
                      </div>
                      <p className='text-6xl min-[2260px]:text-8xl 2xl:text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl max-[500px]:text-xl max-sm:font-semibold'>
                      Fine Tune Your Routine With Precise Workout Stats
                      </p>
                      <p className='text-lg min-[2260px]:text-2xl 2xl:text-xl font-semibold max-sm:text-md max-[500px]:text-sm'>
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                      </p>
                    </div>
                </div>
                <div className='w-[3%] max-xl:w-full h-full max-xl:h-[30px] bg-[#232323]'></div>
                <div id='landingPageB' className='relative w-[25%] max-xl:w-screen h-screen max-xl:flex max-xl:justify-center max-xl:items-center py-10'>
                    <div className='xl:absolute xl:-left-36 max-xl:-left-24 xl:top-1/2 xl:transform xl:-translate-y-1/2'>
                    <img src={phoneImg} alt="phone" className='max-xl:w-[300px] max-lg:w-[280px]'/>
                    </div>
                </div>
    </div>
  )
}

export default WorkoutTracking