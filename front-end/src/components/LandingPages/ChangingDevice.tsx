import ChangingDeviceIcon from "../../Img/ChangingDeviceIcon.webp"
import ProductImage from "../../Img/ProductImage_ChangingDevice.webp"

const ChangingDevice = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-y-10">
            <div className="flex flex-col justify-center items-center gap-y-4 text-center mt-24">
              <img src={ChangingDeviceIcon} alt="ChangingDeviceIcon" />
              <p className="text-[14px] text-semibold tracking-[.3em]">A LIFE CHANGING DEVICE</p>
              <p className="text-6xl line">Get Your 0.4 TrackMate XE Today</p>
              <button className='bg-[#A238FF] text-white font-normal text-lg px-20 py-2 mt-12 rounded-3xl shadow-custom '>Buy Now</button>
            </div>
            <img src={ProductImage} alt="ProductImage" />
    </div>
  )
}

export default ChangingDevice