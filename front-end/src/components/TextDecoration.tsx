interface TextDecorationProps {
    iconText: string;
    icon: string;
    title: string;
    desc: string;
}

const TextDecoration: React.FC<TextDecorationProps> = ({iconText, icon, title, desc}) => {
    console.log(iconText, icon, title, desc);
    
  return (
    <div className='absolute top-1/2 left-10 md:left-20 xl:left-52 transform -translate-y-1/2 max-sm:-translate-x-1/2 max-sm:left-1/2 w-[600px] min-[2260px]:w-[1200px] 2xl:w-[800px]  max-sm:w-[90%] flex flex-col justify-center items-start sm:gap-y-12 gap-y-8'>
    <div className='flex justify-center items-center gap-4'>
      <img src={icon} alt="Icon 2" />
      <p className='text-xl min-[2260px]:text-3xl 2xl:text-2xl max-sm:text-lg max-[500px]:text-md'>{iconText}</p>
      </div>
      <p className='text-6xl min-[2260px]:text-8xl 2xl:text-6xl max-xl:text-5xl max-md:text-4xl max-sm:text-3xl max-[500px]:text-xl max-sm:font-semibold'>
      {title}
      </p>
      <p className='text-lg min-[2260px]:text-2xl 2xl:text-xl font-semibold max-sm:text-md max-[500px]:text-sm'>
        {desc}
      </p>
    </div>
  )
}

export default TextDecoration