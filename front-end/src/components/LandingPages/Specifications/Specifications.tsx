import { useEffect, useState } from 'react';
import ProductImage from "../../../Img/Specifications_ProductImg.webp";
import BatteryIcon from "../../../Img/BatteryIcon.webp";
import Bluetooth from "../../../Img/BluetoothIcon.webp";
import WaterIcon from "../../../Img/WaterIcon.webp";
import WirelessIcon from "../../../Img/WirelessIcon.webp";
import SpecificationsCard from './SpecificationsCard';
import ButtonDecoration from '../../ButtonDecoration';

const Specifications = () => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const imageElement = document.querySelector('.specifications-image-container');
            const imagePosition = imageElement?.getBoundingClientRect().top || 0;
            const imageHeight = imageElement?.clientHeight || 0;
            const windowHeight = window.innerHeight;
            const distanceFromCenter = Math.abs(imagePosition + imageHeight / 2 - windowHeight / 2);

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
        <div className="h-44 flex justify-center items-end  z-50">
        <h2 className="text-6xl min-[2260px]:text-8xl 2xl:text-6xl max-xl:text-5xl max-sm:text-center max-md:text-4xl max-sm:text-5xl max-[500px]:text-4xl max-sm:font-semibold">0.4 TrackMate XE Specifications</h2>
        </div>
    <div id="specifications" className="specifications-image-container h-auto w-screen flex flex-col justify-center gap-y-20 items-center py-32 z-50 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-[#232323] via-[#232323]/20 to-transparent w-full h-auto"style={{ backgroundColor: `rgba(34, 35, 35, ${scrollOpacity})` }}></div>
        <img src={ProductImage} alt="ProductImage" className="lg:w-[678px] lg:h-[871px] sm:w-[600px] sm:h-[793px] z-10"/>
    <div className='xl:absolute z-50 flex flex-col justify-center max-xl:w-full xl:justify-between items-center h-[871px]  gap-y-8 '>
        <div className='flex flex-col gap-y-8 xl:flex-row justify-between items-center xl:w-[1200px]'>
            <div className='xl:absolute top-24 left-0'>
        <SpecificationsCard imgUrl={BatteryIcon} title='20 Hour Battery Life' />
            </div>
            <div className='xl:absolute top-0 right-0'>
        <SpecificationsCard imgUrl={Bluetooth} title='Bluetooth Connectivity' />
            </div>
        </div>
        <div className='flex flex-col  gap-y-8  xl:flex-row  justify-between items-center xl:w-[1200px]'>
        <div className='xl:absolute bottom-0 left-0'>
        <SpecificationsCard imgUrl={WirelessIcon} title='Wireless Charging' />
            </div>
            <div className='xl:absolute bottom-24 right-0'>
        <SpecificationsCard imgUrl={WaterIcon} title='Water Resistance' />
            </div>
        </div>
    </div>
    <div className='z-50'>
    <ButtonDecoration customCLass='font-normal text-lg px-20 py-2 mt-12'/>
    </div>
        </div>
    </div>
  )
}

export default Specifications;
