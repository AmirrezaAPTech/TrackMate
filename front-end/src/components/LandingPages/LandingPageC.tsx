import ProductImage from "../../Img/ProductImage_LPC.webp"
import Icon3 from "../../Img/icon 3.webp"
const LandingPageC = () => {
  return (
    <div className='flex justify-between items-center h-screen w-full'>
        <div id='landingPageC' className='relative w-[25%] h-[80%] bg-yellow-400 '>
    <img src={ProductImage} alt="ProductImage" className="absolute -right-40 top-[24%] z-50"/>
        </div>
        <div className="bg-[#2A2C2C] w-[73%] h-[80%] flex justify-center items-center">
        <div className='w-[600px] h-screen flex flex-col justify-center items-start gap-y-12'>
                      <div className='flex justify-center items-center gap-4'>
                      <img src={Icon3} alt="Icon 3" />
                      <p className='text-xl'>NOTIFICATION SYSTEM</p>
                      </div>
                      <p className='text-6xl'>
                      Helpful Reminders To Keep You on Track
                      </p>
                      <p className='text-lg font-semibold'>
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.                      </p>
                    </div>
        </div>
    </div>
  )
}

export default LandingPageC