import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className="absolute flex justify-between items-center w-full mx-auto mt-5 px-[90px] max-md:px-[60px] max-sm:px-[30px]">
        <div className="flex justify-center items-center gap-1">
        <div className="bg-white w-[20px] h-[20px] rounded-full max-sm:w-[10px] max-sm:h-[10px]"></div>
        <h1 className="font-semibold text-3xl">TrackMate</h1>
        </div>
        <div className="flex justify-center items-center 2xl:gap-10 md:gap-5 max-md:gap-3 text-white text-xl max-sm:hidden">
            <a href=""><h2 className="text-2xl font-normal">FAQ</h2></a>
            <a href="" className='flex justify-center items-center gap-1'><FontAwesomeIcon icon={faCircleUser} /> <p>Log In</p></a>
            <button className='bg-[#A238FF] text-white font-normal text-md px-6 py-1 rounded-3xl shadow-custom transition duration-300 hover:text-black hover:bg-white'>Buy Now</button>
        </div>
    </div>
  )
}

export default Header