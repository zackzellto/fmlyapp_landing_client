import React, { useState, useEffect, useRef } from "react";

interface CollapsibleCardProps {
  title: string;
  content: string;
  backgroundColor: string;
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  title,
  content,
  backgroundColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={toggleOpen}
      className={`cursor-pointer transform transition hover:scale-110 lg:w-[45%] relative lg:left-[26%] bottom-[] w-[73%] border max-w-md mx-auto rounded-xl shadow-2xl overflow-hidden md:max-w-xl m-4 ${backgroundColor}`}
    >
      <div className="md:flex">
        <div className="p-4 m-auto">
          <div className="text-3xl drop-shadow-lg font-bold text-center text-white">
            {title}
          </div>
          {isOpen && (
            <p className="mt-6 text-gray-500 text-center shadow-lg bg-white p-4 rounded-lg">
              {content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleCard;
