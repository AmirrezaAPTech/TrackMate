

const Subscribe = () => {
  return (
    <div className="h-[65vh] flex flex-col justify-start items-center gap-y-12 my-16">
        <div className="overflow-hidden text-[50px] text-center">
          <p>
            Subscribe and Get
          </p>
          <p>
            15% Off Your First Purchase
          </p>
      </div>
      <div className="relative flex flex-col items-start justify-center gap-y-3">
        <label id="subscribeEmail" className="pl-6">Email*</label>
        <input type="email" id="subscribeEmail" placeholder="Sign up here" className="w-[894px] h-[77px] bg-[#ffffff] border-[#e3e3e3] border shadow-custom rounded-[3rem] placeholder-black pl-10 "/>
        <button className='absolute right-2 bottom-[8px] bg-[#A238FF] text-white font-normal h-[61px] text-lg px-16 py-2 mt-12 rounded-[3rem] shadow-custom shadow-[#a238ff7d] '>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
