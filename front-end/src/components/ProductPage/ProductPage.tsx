import { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import TrackMateColors from '../../constants/constants'

const ProductPage = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("white");
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
    const selectedColorData = TrackMateColors.find(TrackMateColor => TrackMateColor.color === selectedColor);
    const selectedColorImageUrl = selectedColorData ? selectedColorData.imageUrl : TrackMateColors[0].imageUrl;

  const addToCart = () => {
    selectedColorData!.quantity = productQuantity + selectedColorData!.quantity;
    setProductQuantity(1)
    alert(selectedColorData!.quantity)
  }

  return (
    <div className="w-full grid grid-cols-8 pt-52">
        <div className="lg:col-span-2 col-span-1"></div>
        <div className="col-span-4 w-full h-screen flex max-lg:flex-col max-lg:gap-y-7 max-lg:col-span-6 justify-center max-lg:items-center gap-x-12">
        <div className="w-1/2">
            {/* <ProductImages/> */}
            <img src={selectedColorImageUrl} alt="ProductWhite" />
                    <div className="flex justify-start gap-x-6 mb-2">
          {TrackMateColors.map((color) => (
            <div className={`cursor-pointer ${color.color == selectedColor && 'border-2 border-[#e2c1ff]'}`} onClick={()=> setSelectedColor(color.color)}>
              <img src={color.imageUrl} alt={color.color} className="w-12"/>
            </div>
          ))}
        </div>
            <p className='text-lg min-[2260px]:text-2xl 2xl:text-xl max-sm:text-md max-[500px]:text-sm'>I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
        </div>
        <div className="w-1/2">
        <p className='text-6xl min-[2260px]:text-8xl 2xl:text-5xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl max-[500px]:text-xl max-sm:font-semibold'>0.4 TrackMate XE</p>
        <p className='text-md mt-2'>SKU: 0001</p>
        <p className='text-2xl mt-5'>$85.00</p>
        <p className='text-md mt-5'>Color</p>
        <div className="flex justify-start items-center gap-x-4 mt-3">
          {
            TrackMateColors.map((TrackMateColor) => (
              <div className="bg-white w-5 h-5 rounded-full border border-white cursor-pointer" style={{backgroundColor: TrackMateColor.color}} onClick={() => setSelectedColor(TrackMateColor.color)}></div>
            ))
          }
        </div>
        <p className='text-md mt-5'>quantity</p>
        <input type="number" onChange={(e) => setProductQuantity(Number(e.target.value))} value={productQuantity} defaultValue={1} min={1} max={5} className="w-24 h-12 bg-white mt-3 text-black pl-5 block"/>
        <button className='bg-[#A238FF] text-white font-normal text-lg w-full px-12 py-2 rounded-3xl shadow-custom transition duration-300 hover:text-black hover:bg-white mt-10' onClick={() => addToCart()}>Add to cart</button>
        <div className="mt-6 flex flex-col justify-center items-center">
      <CollapsibleSection
        title="PRODUCT INFO"
        isOpen={openSection === 'PRODUCT INFO'}
        onToggle={() => handleToggle('PRODUCT INFO')}
      >
        <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
      </CollapsibleSection>
      <CollapsibleSection
        title="RETURN & REFUND POLICY"
        isOpen={openSection === 'RETURN & REFUND POLICY'}
        onToggle={() => handleToggle('RETURN & REFUND POLICY')}
      >
        <p>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
      </CollapsibleSection>
      <CollapsibleSection
        title="SHIPPING INFO"
        isOpen={openSection === 'SHIPPING INFO'}
        onToggle={() => handleToggle('SHIPPING INFO')}
      >
        <p>I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</p>
      </CollapsibleSection>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ProductPage