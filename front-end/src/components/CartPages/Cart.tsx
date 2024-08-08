import { useSelector } from 'react-redux';
import { selectCartItems } from '../../features/cartSlice';
import CartBox from "./CartBox"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { selectTotalQuantity } from '../../features/cartSlice'

interface CartProps {
    setCartShown: (isShown: boolean) => void;
    cartShown: boolean;
}

const Cart: React.FC<CartProps> = ({setCartShown, cartShown}) => {
    const items = useSelector(selectCartItems);
    const totalQuantity = useSelector(selectTotalQuantity);

    function checkOut() {
        if (totalQuantity > 0) {
            alert("Checkout Successfully")
        }else {
            alert("Your Cart Is Empty")
        }
    }
    
  return (
    <div onClick={() => setCartShown(false)} className="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-black bg-opacity-20 transition-all duration-300">
        <div onClick={(e) => e.stopPropagation()} className={`w-80 h-screen fixed top-0 bottom-0 right-0 bg-black [#1a1a1a] text-black grid grid-rows-10 sidebar-animation `}>
            <div className="row-span-1 h-full bg-white">
            <div className="relative text-2xl text-center pt-5">Cart</div>
            <div onClick={() => setCartShown(false)} className="absolute top-3 left-3 text-xl cursor-pointer">X</div>
            </div>
            <div className="row-span-7 h-full overflow-y-auto px-3 no-scrollbar">
            {totalQuantity > 0 ? items
        .filter(item => item.quantity > 0)
        .map(item => (
          <CartBox color={item.color} imageUrl={item.imageUrl} quantity={item.quantity} />
        )):
            <p className='text-white text-2xl text-center pt-10'>Your Cart is Empty</p>
            }
            </div>
            <div className="row-span-2 h-full flex flex-col justify-evenly pb-5 px-5 border-t border-t-[#444444]">
                <div className='flex justify-start items-center gap-x-3 text-3xl text-white'><span>Total: </span><span>{`$${totalQuantity * 85}`}</span></div>
            <button onClick={() => checkOut()} className='bg-[#A238FF] text-white font-semibold w-full rounded-none mr-4 transition duration-300 hover:text-black hover:bg-white'>Checkout <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    </div>
  )
}

export default Cart