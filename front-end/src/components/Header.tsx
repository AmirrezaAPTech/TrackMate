import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import BagIcon from '../Img/bag.svg'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../features/cartSlice'
import Cart from './CartPages/Cart'


const Header = () => {
  const [cartShown, setCartShown] = useState(false)
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className="absolute flex justify-between items-center w-full mx-auto mt-5 px-[90px] max-lg:px-[40px] max-md:px-[40px] max-sm:px-[20px] max-[475px]:px-[10px]">
      <Link to={"/"}>
        <div className="flex justify-center items-center gap-1">
        <div className="bg-white w-[20px] h-[20px] rounded-full max-sm:w-[10px] max-sm:h-[10px]"></div>
        <h1 className="font-semibold text-3xl hover:text-white">TrackMate</h1>
        </div></Link>
        <div className="flex justify-center max-sm:justify-end items-center 2xl:gap-10 md:gap-5 max-md:gap-4 text-white text-xl">
            <a href=""><h2 className="text-2xl font-normal max-sm:hidden">FAQ</h2></a>
            <Link to={"/register"}><div className='flex justify-center items-center gap-1 max-sm:text-2xl'><FontAwesomeIcon icon={faCircleUser} /><p className='max-sm:hidden'>Log In</p></div></Link>
            {/* <div className='text-3xl flex relative'><FontAwesomeIcon icon={faCartShopping} /><p className='text-base text-black absolute left-2/4 bottom-2 font-bold'>2</p></div> */}
            <div onClick={() => setCartShown(true)} className='relative flex justify-center items-end w-6 h-6 cursor-pointer transition-all duration-150 hover:opacity-60'>
            <img src={BagIcon} alt="BagIcon" className='w-6'/>
            <p className='absolute text-center text-sm text-black'>{totalQuantity}</p>
          </div>
           <Link to="/product"> <button className='bg-[#A238FF] max-sm:hidden text-white font-normal text-md px-6 py-1 rounded-3xl shadow-custom transition duration-300 hover:text-black hover:bg-white'>Buy Now</button></Link>
        </div>
        {
         cartShown && <Cart setCartShown={setCartShown} cartShown={cartShown}/>
        }
    </div>
  )
}

export default Header