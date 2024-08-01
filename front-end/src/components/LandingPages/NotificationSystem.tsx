import ProductImage from "../../Img/ProductImage_LPC.webp"
import Icon3 from "../../Img/icon 3.webp"
import TextDecoration from "../TextDecoration"
const NotificationSystem = () => {
  return (
    <div className='grid max-lg:grid-row-12 lg:grid-cols-12 items-center gap-10 lg:h-screen w-full'>
        <div id='NotificationSystem' className='relative flex justify-center order-2 lg:order-1 items-center lg:col-span-3 h-[60vh] lg:h-[80%] '>
    <img src={ProductImage} alt="ProductImage" className="lg:absolute lg:-right-24 xl:-right-40 lg:top-1/2 lg:transform lg:-translate-y-1/2 z-50"/>
        </div>
        <div className="relative bg-[#2A2C2C] order-1 lg:order-2 h-[60vh] lg:col-span-9 lg:h-[80%] flex justify-center items-center">
        <TextDecoration icon={Icon3} iconText="NOTIFICATION SYSTEM" title="Helpful Reminders To Keep You on Track" desc="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." />
        </div>
    </div>
  )
}

export default NotificationSystem