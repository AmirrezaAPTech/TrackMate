import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, selectProductColors } from '../../features/cartSlice';
import CollapsibleSection from './CollapsibleSection';
import { CollapsibleSections } from '../../constants/constants';

const ProductPage = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('white');
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const productColors = useSelector(selectProductColors);

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const selectedColorData = productColors.find(color => color.color === selectedColor);
  const selectedColorImageUrl = selectedColorData ? selectedColorData.imageUrl : productColors[0].imageUrl;

  const addToCart = () => {
    if (selectedColorData) {
      dispatch(addItemToCart({ color: selectedColor, imageUrl: selectedColorImageUrl, quantity: productQuantity }));
      setProductQuantity(1);
    }
  };
  return (
    <div className="w-full grid grid-cols-12 lg:pt-52 pt-24 pb-16">
      <div className="xl:col-span-2 lg:col-span-1 col-span-1"></div>
      <div className="col-span-10 xl:col-span-8 lg:col-span-10 w-full min-h-screen flex max-lg:flex-col max-lg:gap-y-7 justify-center max-lg:items-center gap-x-12">
        <div className="lg:w-1/2 md:w-2/3 sm:w-3/4 w-full">
          <img src={selectedColorImageUrl} alt="Product" />
          <div className="flex justify-start gap-x-6 mb-2">
            {productColors.map((color) => (
              <div key={color.color} className={`cursor-pointer ${color.color === selectedColor ? 'border-2 border-[#e2c1ff]' : ''}`} onClick={() => setSelectedColor(color.color)}>
                <img src={color.imageUrl} alt={color.color} className="w-12" />
              </div>
            ))}
          </div>
          <p className='text-lg min-[2260px]:text-2xl 2xl:text-xl max-sm:text-md max-[500px]:text-sm'>I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>
          </div>
        <div className="lg:w-1/2 md:w-2/3 sm:w-3/4 w-full">
          <p className="text-6xl min-[2260px]:text-6xl xl:text-5xl max-md:text-4xl max-sm:text-3xl max-[500px]:text-xl max-sm:font-semibold">0.4 TrackMate XE</p>
          <p className="text-md mt-2">SKU: 0001</p>
          <p className="text-2xl mt-5">$85.00</p>
          <p className="text-md mt-5">Color</p>
          <div className="flex justify-start items-center gap-x-4 mt-3">
            {productColors.map((TrackMateColor) => (
              <div key={TrackMateColor.color} className={`bg-white w-5 h-5 rounded-full border border-white cursor-pointer ${TrackMateColor.color === selectedColor ? 'border-2 border-[#9d2dff] shadow-2xl' : ''}`} style={{ backgroundColor: TrackMateColor.color }} onClick={() => setSelectedColor(TrackMateColor.color)}></div>
            ))}
          </div>
          <p className="text-md mt-5">Quantity</p>
          <input type="number" onChange={(e) => setProductQuantity(Number(e.target.value))} value={productQuantity} defaultValue={1} min={1} max={10} className="w-24 h-12 bg-white mt-3 text-black pl-5 block" />
          <button className="bg-[#A238FF] text-white font-normal text-lg w-full px-12 py-2 rounded-3xl shadow-custom transition duration-300 hover:text-black hover:bg-white mt-10" onClick={addToCart}>Add to cart</button>
          <div className="mt-6 flex flex-col justify-center items-center">
            {CollapsibleSections.map((section) => (
              <CollapsibleSection
                key={section.title}
                title={section.title}
                isOpen={openSection === section.title}
                onToggle={() => handleToggle(section.title)}
                text={section.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
