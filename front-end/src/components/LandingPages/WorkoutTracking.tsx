import { useEffect, useState } from 'react';
// import WomanTrackingImg from '../../Img/WomanTrackingImg.webp'
import WomanTrackingImg2xl from '../../Img/WomanTrackingImg-2xl.webp'
import WomanTrackingImgMd from '../../Img/WomanTrackingImg-md.webp'
import WomanTrackingImgSm from '../../Img/WomanTrackingImg-sm.webp'
import Icon2 from '../../Img/icon 2.webp'
import phoneImg from '../../Img/phone.webp'
import TextDecoration from '../TextDecoration';

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
                    <TextDecoration icon={Icon2} iconText="WORKOUT TRACKING" title="Fine Tune Your Routine With Precise Workout Stats" desc="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." />

                </div>
                <div className='w-[3%] max-xl:w-full h-full max-xl:h-[30px] bg-[#232323]'></div>
                <div id='WorkoutTracking' className='relative w-[25%] max-xl:w-screen h-screen max-xl:flex max-xl:justify-center max-xl:items-center py-10'>
                    <div className='xl:absolute xl:-left-36 max-xl:-left-24 xl:top-1/2 xl:transform xl:-translate-y-1/2'>
                    <img src={phoneImg} alt="phone" className='max-xl:w-[300px] max-lg:w-[280px]'/>
                    </div>
                </div>
    </div>
  )
}

export default WorkoutTracking