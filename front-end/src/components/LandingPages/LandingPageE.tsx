import maleTracking from "../../Img/MaleTrackingImg.webp";
import Icon5 from "../../Img/icon 5.webp";
import TextDecoration from "../TextDecoration";

const LandingPageE = () => {
  return (
    <div className="relative flex h-[85vh] flex-col items-start justify-center bg-fixed bg-center bg-cover row-span-4" style={{ backgroundImage: `url(${maleTracking})` }}>
      <div className="absolute inset-0 bg-[rgb(34,35,35)] opacity-20 w-full h-full z-10"></div>
      <div className="parallax-background z-50">
        <TextDecoration icon={Icon5} iconText="WORKOUT TRACKING" title="Fine Tune Your Routine With Precise Workout Stats" desc="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."/>
      </div>
    </div>
  );
}

export default LandingPageE;
