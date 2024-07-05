import { useEffect, useState } from 'react';
import ProductImg from '../Img/ProductImg.webp'
import WomanTrackingImg from '../Img/WomanTrackingImg.png'
import Icon2 from '../Img/icon 2.webp'
import phoneImg from '../Img/phone.webp'

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
            <div className='flex max-md:flex-col justify-between items-center h-screen w-[90%] mx-auto'>
                <div className='flex flex-col gap-5'>
                    <p className='text-2xl'>Own Your Daily Routine</p>
                    <h2 className='font-semibold text-7xl'>0.4 TrackMate XE</h2>
                    <p className='text-2xl'>A health tracker that motivates you every step of the way</p>
                    <button className='bg-[#A238FF] w-48 text-white font-normal text-md px-6 py-2 rounded-3xl shadow-md shadow-[#a238ff7d] '>Buy Now</button>
                </div>
                <div>
                    <img src={ProductImg} alt="ProductImg" />
                </div>
            </div>
            <div className='h-screen w-screen'>
                <div className='h-full w-[75%] bg-[#222323] relative image-container'>
                    <div className="absolute inset-0 w-60 bg-[#232323] flex-1 bg-transparent to-transparent" ></div>
                    <div className="absolute inset-0 w-[full]" style={{ backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#232323] via-[#232323]/20 to-transparent"></div>
                    <div className='absolute flex'>
                    <div>
                    <img src={phoneImg} alt="phone" />
                    </div>
                    <div className='w-[600px] h-screen ml-64 flex flex-col justify-center items-start gap-y-9'>
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
                    </div></div>
                    <img src={WomanTrackingImg} alt="WomanTrackingImg" className="h-full w-[97%] object-cover" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
