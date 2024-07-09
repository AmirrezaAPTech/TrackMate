import React from 'react';

interface SpecificationsCardProps {
    imgUrl: string;
    title: string;
}

const SpecificationsCard: React.FC<SpecificationsCardProps> = ({ imgUrl, title }) => {
  return (
    <div className="w-[400px] h-[170.38px] bg-[#222323] rounded-2xl flex flex-col items-start justify-center p-4 gap-4">
        <div className='flex justify-start items-center gap-3'>
      <img src={imgUrl} alt={title} className="w-16 h-16 object-cover rounded-full" />
      <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
    </div>
  );
}

export default SpecificationsCard;
