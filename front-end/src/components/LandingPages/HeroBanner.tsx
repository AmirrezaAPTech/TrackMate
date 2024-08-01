import ButtonDecoration from "../ButtonDecoration"
import ProductImg from '../../Img/ProductImg.webp'

const HeroBanner = () => {
  return (
    <div id='HeroBanner' className='flex max-md:flex-col justify-between max-md:justify-evenly items-center h-screen max-sm:h-[110vh] w-full mx-auto max-lg:gap-x-2 xl:px-24 lg:px-10 md:px-9 pt-24'>
    <div className='flex flex-col gap-5 max-sm:gap-y-6 lg:gap-x-12 max-md:items-center max-md:text-center max-md:px-2'>
        <p className='text-2xl max-lg:text-xl'>Own Your Daily Routine</p>
        <h3 className='font-semibold text-7xl max-xl:text-6xl max-lg:text-4xl'>0.4 TrackMate XE</h3>
        <p className='text-2xl max-lg:text-xl'>A health tracker that motivates you every step of the way</p>
        <ButtonDecoration customCLass='w-48 text-md px-6 py-2' />
    </div>
    <div>
        <img src={ProductImg} alt="ProductImg" className='w-[548px] h-[540px] max-xl:w-[420px] max-xl:h-auto max-lg:w-[320px] max-lg:h-auto max-md:w-[450px] max-sm:w-[300px] max-sm:mt-7'/>
    </div>
</div>
  )
}

export default HeroBanner