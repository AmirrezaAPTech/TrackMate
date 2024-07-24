

const Subscribe = () => {
  return (
    <div className="sm:h-[60vh] h-[70vh] flex flex-col justify-center items-center gap-y-12">
        <div className="overflow-hidden md:text-[50px] sm:text-[45px] min-[500px]:text-[40px] text-[35px] text-center px-2">
          <p>
            Subscribe and Get
          </p>
          <p>
            15% Off Your First Purchase
          </p>
      </div>
      <div className="relative flex flex-col items-start justify-center gap-y-3 w-full max-w-[894px] min-[500px]:px-7 px-2">
        <label id="subscribeEmail" className="pl-6">Email*</label>
        <input type="email" id="subscribeEmail" placeholder="Sign up here" className="w-full sm:h-[77px] min-[500px]:h-[70px] h-[61px] bg-[#ffffff] border-[#e3e3e3] border shadow-custom rounded-[3rem] placeholder-black pl-10 text-black"/>
        <button className='absolute min-[500px]:right-9 right-3 bottom-[8px] bg-[#A238FF] text-white font-normal sm:h-[61px] min-[500px]:h-[54px] h-[45px] min-[500px]:text-lg text-sm sm:px-16 min-[500px]:px-12 px-4 sm:py-2 py-1 mt-12 rounded-[3rem] shadow-custom transition duration-300 hover:text-black hover:bg-white'>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
