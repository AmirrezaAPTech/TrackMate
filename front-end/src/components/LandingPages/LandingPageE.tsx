import maleTracking from "../../Img/MaleTrackingImg.webp";
import Icon5 from "../../Img/icon 5.webp";

const LandingPageE = () => {
  return (
    <div className="relative flex h-screen flex-col items-start justify-center bg-fixed bg-center bg-cover row-span-4" style={{ backgroundImage: `url(${maleTracking})` }}>
      <div className="absolute inset-0 bg-[rgb(34,35,35)] opacity-20 w-full h-full z-10"></div>
      <div className="parallax-background z-50">
      <div className='w-[600px] h-screen flex flex-col justify-center items-start gap-y-12 ml-60'>
                      <div className='flex justify-center items-center gap-4'>
                      <img src={Icon5} alt="Icon 2" />
                      <p className='text-xl'>WORKOUT TRACKING</p>
                      </div>
                      <p className='text-6xl'>
                      Fine Tune Your Routine With Precise Workout Stats
                      </p>
                      <p className='text-lg font-semibold'>
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                      </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPageE;
