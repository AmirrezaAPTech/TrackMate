// import { useEffect, useState } from 'react';
import ProductImg from '../Img/ProductImg.webp'
import WorkoutTracking from './LandingPages/WorkoutTracking';
// import LandingPageC from './LandingPages/LandingPageC';
// import LandingPageD from './LandingPages/LandingPageD';
// import LandingPageE from './LandingPages/LandingPageE';
// import Specifications from './LandingPages/Specifications/Specifications';
// import HabitsMindfulness from './LandingPages/HabitsMindfulness';
// import ChangingDevice from './LandingPages/ChangingDevice';
// import Subscribe from './LandingPages/Subscribe';
// import Footer from './LandingPages/Footer';

const HomePage = () => {
    return (
        <div className='w-full overflow-hidden'>
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
            <WorkoutTracking />
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
