// components/CollapsibleSection.tsx
import React from 'react';

type CollapsibleSectionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="mb-4 w-full">
      <div
        onClick={onToggle}
        className="cursor-pointer flex justify-between items-center p-3 w-full"
      >
        <h3 className="m-0 text-lg min-[2260px]:text-2xl 2xl:text-md max-sm:text-md max-[500px]:text-sm font-semibold">{title}</h3>
        <span className='text-lg font-semibold'>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-3 border border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
