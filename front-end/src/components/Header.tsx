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
    <div className="absolute flex justify-between items-center w-full mx-auto mt-5 px-[90px] max-md:px-[60px] max-sm:px-[30px]">
      <Link to={"/"}>
        <div className="flex justify-center items-center gap-1">
        <div className="bg-white w-[20px] h-[20px] rounded-full max-sm:w-[10px] max-sm:h-[10px]"></div>
        <h1 className="font-semibold text-3xl hover:text-white">TrackMate</h1>
        </div></Link>
        <div className="flex justify-center items-center 2xl:gap-10 md:gap-5 max-md:gap-3 text-white text-xl max-sm:hidden">
            <a href=""><h2 className="text-2xl font-normal">FAQ</h2></a>
            <a href="" className='flex justify-center items-center gap-1'><FontAwesomeIcon icon={faCircleUser} /><p>Log In</p></a>
            {/* <div className='text-3xl flex relative'><FontAwesomeIcon icon={faCartShopping} /><p className='text-base text-black absolute left-2/4 bottom-2 font-bold'>2</p></div> */}
            <div onClick={() => setCartShown(!cartShown)} className='relative flex justify-center items-end w-6 h-6 cursor-pointer transition-all duration-150 hover:opacity-60'>
            <img src={BagIcon} alt="BagIcon" className='w-6'/>
            <p className='absolute text-center text-sm text-black'>{totalQuantity}</p>
          </div>
           <Link to="/product"> <button className='bg-[#A238FF] text-white font-normal text-md px-6 py-1 rounded-3xl shadow-custom transition duration-300 hover:text-black hover:bg-white'>Buy Now</button></Link>
        </div>
        {
         cartShown && <Cart setCartShown={setCartShown}/>
        }
    </div>
  )
}

export default Header