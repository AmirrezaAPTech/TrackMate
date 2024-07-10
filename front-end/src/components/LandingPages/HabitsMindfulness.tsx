import { useEffect, useState } from 'react';
import Mindfulness from "../../Img/Mindfulness.webp"
import Habits from "../../Img/Habits.webp"
import HabitsIcon from "../../Img/HabitsIcon.webp"
import MindfulnessIcon from "../../Img/MindfulnessIcon.webp"

const HabitsMindfulness = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          const imageElement = document.querySelector('.habitsMindfulness-image-container');
          const imagePosition = imageElement?.getBoundingClientRect().top || 0;
          const imageHeight = imageElement?.clientHeight || 0;
          const windowHeight = window.innerHeight;
          const distanceFromCenter = (imagePosition + imageHeight / 2 - windowHeight / 2) * -1;

          // Calculate opacity based on image position relative to the center of the viewport
          const opacity = Math.min(1, distanceFromCenter / windowHeight);
          console.log(opacity);
          
          
          setScrollOpacity(opacity);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
    <div className="relative flex justify-center items-center gap-x-10 habitsMindfulness-image-container">
          <div className="absolute z-10 inset-0 bg-gradient-to-b from-[#232323] via-[#232323]/20 to-transparent w-full h-full"style={{ backgroundColor: `rgba(34, 35, 35, ${scrollOpacity})` }}></div>
        <div className="relative w-[741.5px] h-[954px] pt-10 overflow-hidden">
            <img src={Habits} alt="Habits"  className="w-[741.5px] h-[954px]"/>
            <div className="flex flex-col justify-center items-center gap-y-4 text-center absolute top-10 z-50 left-1/2 transform -translate-x-1/2">
              <img src={HabitsIcon} alt="HabitsIcon" />
              <p className="text-[14px] text-semibold tracking-[.3em]">LEARN MORE ABOUT YOURSELF</p>
              <p className="text-[40px] line">Track Your Sleeping Habits</p>
            </div>
        </div>
        <div className="relative w-[741.5px] h-[954px] pt-10 overflow-hidden" style={{ backgroundImage: `url(${Mindfulness})`, backgroundSize: 'cover' }}>
            <img src={Mindfulness} alt="Mindfulness" className=" w-[741.5px] h-[954px]"/>
            <div className="flex flex-col justify-center items-center gap-y-4 text-center absolute top-10 z-50 left-1/2 transform -translate-x-1/2">
              <img src={MindfulnessIcon} alt="MindfulnessIcon" />
              <p className="text-[14px] text-semibold tracking-[.3em]">TAKE A DEEP BREATH</p>
              <p className="text-[40px] line">Get a Guided Mindfulness Break</p>
            </div>
        </div>
    </div>
  )
}

export default HabitsMindfulness