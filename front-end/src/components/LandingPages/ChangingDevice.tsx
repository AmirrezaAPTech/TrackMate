import ChangingDeviceIcon from "../../Img/ChangingDeviceIcon.webp"
import ProductImage from "../../Img/ProductImage_ChangingDevice.webp"
import ButtonDecoration from "../ButtonDecoration"

const ChangingDevice = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-y-10">
            <div className="flex flex-col justify-center items-center gap-y-4 text-center mt-24 max-sm:px-5">
              <img src={ChangingDeviceIcon} alt="ChangingDeviceIcon" />
              <p className="text-[14px] text-semibold tracking-[.3em]">A LIFE CHANGING DEVICE</p>
              <p className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">Get Your 0.4 TrackMate XE Today</p>
              <ButtonDecoration customCLass="text-lg sm:px-20 px-16 sm:py-2 py-[5px] sm:mt-12 mt-8 " />
            </div>
            <img src={ProductImage} alt="ProductImage" />
    </div>
  )
}

export default ChangingDevice