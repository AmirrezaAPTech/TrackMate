// import ProductWhite from "../../Img/ProductImages/ProductWhite.webp"
import { useDispatch } from 'react-redux';
import { updateItemQuantity } from '../../features/cartSlice';

interface CartBoxProps {
    color: string;
    imageUrl: string;
    quantity: number;
  }
  
  const CartBox: React.FC<CartBoxProps> = ({ color, imageUrl, quantity }) => {
    const dispatch = useDispatch();
  
    const handleUpdateQuantity = (color:string, quantity:number) => {
      dispatch(updateItemQuantity({ color, quantity }));
    };

  return (
    <div className="w-full h-36 border-b border-b-[#444444] flex justify-start gap-x-1 py-4">
        <div>
        <img src={imageUrl} alt="ProductWhite" className="w-24"/>
        </div>
        <div className="flex flex-col gap-y-1">
            <p className="text-[#B3B3B3]">0.4 TrackMate XE</p>
            <p className="font-semibold text-white text-xl">$85.00</p>
            <input type="number" value={quantity} onChange={(e) => handleUpdateQuantity(color, Number(e.target.value))} className="border border-white w-16 text-white text-center"/>
        </div>
    </div>
  )
}

export default CartBox