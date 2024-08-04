import React, { useEffect, useRef } from 'react';

interface SpecificationsCardProps {
    imgUrl: string;
    title: string;
}

const SpecificationsCard: React.FC<SpecificationsCardProps> = ({ imgUrl, title }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="w-[280px] sm:w-[400px] sm:h-[170.38px] bg-[#222323] rounded-2xl flex flex-col items-start justify-center p-4 gap-4 shadow-2xl shadow-black max-sm:text-center cart-animation">
        <div className='flex w-full flex-col sm:flex-row sm:justify-start justify-center items-center gap-3'>
      <img src={imgUrl} alt={title} className="sm:w-16 w-12 h-12 sm:h-16 object-cover rounded-full" />
      <h3 className="text-white text-xl font-semibold">{title}</h3>
        </div>
        <p>I'm a paragraph. Click here to add your own text and edit me.</p>
    </div>
  );
}

export default SpecificationsCard;
