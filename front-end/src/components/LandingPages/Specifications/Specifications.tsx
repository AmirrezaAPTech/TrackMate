import { useEffect, useState } from 'react';
import ProductImage from "../../../Img/Specifications_ProductImg.webp"
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
    </div>
    </div>
  )
}

export default Specifications