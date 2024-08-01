import { useSelector } from 'react-redux';
import { selectCartItems } from '../../features/cartSlice';
import CartBox from "./CartBox"
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CartProps {
    setCartShown: (isShown: boolean) => void;
}

const Cart: React.FC<CartProps> = ({setCartShown}) => {
    const items = useSelector(selectCartItems);
    
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-50">
        <div className="w-80 h-screen fixed top-0 bottom-0 right-0 bg-[#1a1a1a] text-black grid grid-rows-10">
            <div className="row-span-1 h-full bg-white">
            <div className="relative text-2xl text-center pt-5">Cart</div>
            <div onClick={() => setCartShown(false)} className="absolute top-3 left-3 text-xl cursor-pointer">X</div>
            </div>
            <div className="row-span-7 h-full overflow-y-auto px-3 no-scrollbar">
            {items
        .filter(item => item.quantity > 0)
        .map(item => (
          <CartBox color={item.color} imageUrl={item.imageUrl} quantity={item.quantity} />
        ))}
            </div>
            <div className="row-span-2 h-full flex flex-col justify-evenly pb-5 px-2 border-t border-t-[#444444]">
                <div className='flex justify-start items-center gap-x-3 text-3xl text-white'><span>Total: </span><span>$775.00</span></div>
            <button className='bg-[#A238FF] text-white font-semibold w-full rounded-none mr-4 shadow-custom transition duration-300 hover:text-black hover:bg-white'>Checkout <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    </div>
  )
}

export default Cart