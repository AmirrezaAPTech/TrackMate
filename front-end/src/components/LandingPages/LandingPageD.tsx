import { useState, useEffect, useRef } from 'react';
import icon4 from "../../Img/icon 4.webp";
import LineD from "../../Img/LineD.png";

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
        const skewDegree = ((maxScroll - scrollPosition) / maxScroll) * 40 - 20;
        
        setSkew(skewDegree);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-[200vh] flex flex-col items-center">
      <div className="w-[700px] text-center flex flex-col justify-center items-center gap-y-9 pt-9">
        <img src={icon4} alt="icon4" />
        <p className="text-5xl">Match Your Band to Your Style</p>
        <p className="text-md font-semibold">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
        </p>
      </div>
      <div ref={containerRef} className="w-[120vw] overflow-hidden relative">
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
