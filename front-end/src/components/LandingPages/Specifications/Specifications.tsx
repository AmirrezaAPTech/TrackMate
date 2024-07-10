import { useEffect, useState } from 'react';
import ProductImage from "../../../Img/Specifications_ProductImg.webp"
import BatteryIcon from "../../../Img/BatteryIcon.webp"
import SpecificationsCard from './SpecificationsCard';

const Specifications = () => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const imageElement = document.querySelector('.specifications-image-container');
            const imagePosition = imageElement?.getBoundingClientRect().top || 0;
            const imageHeight = imageElement?.clientHeight || 0;
            const windowHeight = window.innerHeight;
            const distanceFromCenter = Math.abs(imagePosition + imageHeight / 2 - windowHeight / 2);

            // Calculate opacity based on image position relative to the center of the viewport
            const opacity = Math.min(1, distanceFromCenter / windowHeight);
            
            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div>
        <div className="h-44 flex justify-center items-end z-50">
        <h2 className="text-6xl text-white">0.4 TrackMate XE Specifications</h2>
        </div>
    <div id="specifications" className="specifications-image-container h-auto w-screen flex flex-col justify-center gap-y-20 items-center py-32 z-50 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-[#232323] via-[#232323]/20 to-transparent w-full h-full"style={{ backgroundColor: `rgba(34, 35, 35, ${scrollOpacity})` }}></div>
        <img src={ProductImage} alt="ProductImage" className="w-[678px] h-[871px] z-10"/>
    <div className='absolute z-50 flex flex-col justify-between items-center h-[871px]'>
        <div className='flex justify-between items-center w-[1200px]'>
            <div className='absolute top-24 left-0'>
        <SpecificationsCard imgUrl={BatteryIcon} title='20 Hour Battery Life' />
            </div>
            <div className='absolute top-0 right-0'>
        <SpecificationsCard imgUrl={BatteryIcon} title='20 Hour Battery Life' />
            </div>
        </div>
        <div className='flex justify-between items-center w-[1200px]'>
        <div className='absolute bottom-0 left-0'>
        <SpecificationsCard imgUrl={BatteryIcon} title='20 Hour Battery Life' />
            </div>
            <div className='absolute bottom-24 right-0'>
        <SpecificationsCard imgUrl={BatteryIcon} title='20 Hour Battery Life' />
            </div>
        </div>
    </div>
    <button className='bg-[#A238FF] text-white font-normal text-lg px-20 py-2 mt-12 rounded-3xl shadow-md shadow-[#a238ff7d] z-50'>Buy Now</button>
    </div>
    </div>
  )
}

export default Specifications