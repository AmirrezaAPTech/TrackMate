import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className="absolute flex justify-between items-center w-full mx-auto mt-5 px-[90px]">
        <div className="flex justify-center items-center gap-1">
        <div className="bg-white w-[20px] h-[20px] rounded-full"></div>
        <h1 className="font-semibold text-3xl">TrackMate</h1>
        </div>
        <div className="flex justify-center items-center gap-5 text-white text-xl">
            <a href=""><h2 className="text-2xl font-normal">FAQ</h2></a>
            <a href="" className='flex justify-center items-center gap-1'><FontAwesomeIcon icon={faCircleUser} /> <p>Log In</p></a>
            <button className='bg-[#A238FF] text-white font-normal text-md px-6 py-1 rounded-3xl shadow-md shadow-[#a238ff7d] '>Buy Now</button>
        </div>
    </div>
  )
}

export default Header