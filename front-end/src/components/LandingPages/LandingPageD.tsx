import { useState, useEffect, useRef } from 'react';
import icon4 from "../../Img/icon 4.webp";
import LineD from "../../Img/LineD.png";
import ProductImage from "../../Img/ProductImage_LPD.webp";
import ButtonDecoration from '../ButtonDecoration';

const LandingPageD = () => {
  const [skew, setSkew] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerTop = container.getBoundingClientRect().top;
        const containerHeight = container.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = windowHeight - containerTop;
        const maxScroll = windowHeight + containerHeight;
        const skewDegree = ((maxScroll - scrollPosition) / maxScroll) * 47 - 20;
        
        setSkew(skewDegree);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative sm:h-[130vh] h-screen flex flex-col justify-center items-center">
      <div className='w-screen absolute flex flex-col items-center z-50'>
      <div className="w-[600px] min-[2260px]:w-[1200px] 2xl:w-[800px]  max-sm:w-[90%] text-center flex flex-col justify-center items-center gap-y-9 pt-9">
        <img src={icon4} alt="icon4" />
        <p className="text-5xl min-[2260px]:text-8xl 2xl:text-5xl max-xl:text-5xl max-md:text-3xl max-sm:text-2xl max-[500px]:text-xl max-sm:font-semibold">Match Your Band to Your Style</p>
        <p className="text-md min-[2260px]:text-2xl 2xl:text-xl font-semibold max-sm:text-md max-[500px]:text-sm">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </p>
      </div>
      <div>
        <img src={ProductImage} alt="ProductImage" />
      </div>
        <ButtonDecoration customCLass='sm:text-lg text-md sm:px-20 px-12 sm:py-2 py-1 mt-12'/>
      </div>
      <div ref={containerRef} className="2xl:w-[120vw] xl:w-[130vw] md:w-[140vw] 2xl:mt-28 xl:mt-36 md:mt-24 md:items-start overflow-hidden relative hidden md:flex">
        <img
          src={LineD}
          alt="Line"
           className="w-full"
           style={{ transform: `translate3d(0px, 0px, 0px) skew(0deg, ${skew}deg)` }}
        />
      </div>

    </div>
  );
};

export default LandingPageD;
