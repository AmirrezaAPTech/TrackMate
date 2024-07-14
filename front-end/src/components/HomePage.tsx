import { useEffect, useState } from 'react';
import ProductImg from '../Img/ProductImg.webp'
import WomanTrackingImg from '../Img/WomanTrackingImg.webp'
import Icon2 from '../Img/icon 2.webp'
import phoneImg from '../Img/phone.webp'
// import LandingPageC from './LandingPages/LandingPageC';
// import LandingPageD from './LandingPages/LandingPageD';
// import LandingPageE from './LandingPages/LandingPageE';
// import Specifications from './LandingPages/Specifications/Specifications';
// import HabitsMindfulness from './LandingPages/HabitsMindfulness';
// import ChangingDevice from './LandingPages/ChangingDevice';
// import Subscribe from './LandingPages/Subscribe';
// import Footer from './LandingPages/Footer';

const HomePage = () => {
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
        <div className='w-full'>
            <div id='landingPageA' className='flex max-md:flex-col justify-between max-md:justify-evenly items-center h-screen w-full mx-auto max-lg:gap-x-2 xl:px-24 lg:px-10 md:px-9 pt-24'>
                <div className='flex flex-col gap-5 lg:gap-x-12 max-md:items-center max-md:text-center max-md:px-2'>
                    <p className='text-2xl max-lg:text-xl'>Own Your Daily Routine</p>
                    <h3 className='font-semibold text-7xl max-xl:text-6xl max-lg:text-4xl'>0.4 TrackMate XE</h3>
                    <p className='text-2xl max-lg:text-xl'>A health tracker that motivates you every step of the way</p>
                    <button className='bg-[#A238FF] w-48 text-white font-normal text-md px-6 py-2 rounded-3xl shadow-custom  transition duration-300 hover:text-black hover:bg-white '>Buy Now</button>
                </div>
                <div>
                    <img src={ProductImg} alt="ProductImg" className='w-[548px] h-[540px] max-xl:w-[420px] max-xl:h-auto max-lg:w-[320px] max-lg:h-auto max-md:w-[450px] max-sm:w-[300px]'/>
                </div>
            </div>
            <div className='h-screen w-screen'>
                <div className='flex justify-between h-screen'>
            <div className='absolute flex justify-around items-center w-full z-10' >
            <div className='w-[600px] h-screen flex flex-col justify-center items-start gap-y-12'>
                      <div className='flex justify-center items-center gap-4'>
                      <img src={Icon2} alt="Icon 2" />
                      <p className='text-xl'>WORKOUT TRACKING</p>
                      </div>
                      <p className='text-6xl'>
                      Fine Tune Your Routine With Precise Workout Stats
                      </p>
                      <p className='text-lg font-semibold'>
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                      </p>
                    </div>
                    <div>
                    <img src={phoneImg} alt="phone" />
                    </div>
                    </div>
                    <div className="inset-0 w-60 bg-[#232323] flex-1 bg-transparent to-transparent"></div>
                <div className='relative h-full w-[63%] image-container'>
                    <div className="inset-0 w-60 bg-[#232323] flex-1 bg-transparent to-transparent"  ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#232323] via-[#232323]/20 to-transparent w-[97%]"style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}></div>
                    <img src={WomanTrackingImg} alt="WomanTrackingImg" className="h-full w-[97%] object-cover" />
                </div>
                    <div id='landingPageB' className='w-[25%] h-full'></div>
                </div>
            </div>
            {/* <LandingPageC />
            <LandingPageD />
            <LandingPageE />
            <Specifications />
            <HabitsMindfulness />
            <ChangingDevice />
            <Subscribe/>
            <Footer/> */}
        </div>
    );
}

export default HomePage;
