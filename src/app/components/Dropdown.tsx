import React, { useState } from "react";
interface DropdownProps {
  hoverChildren: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ hoverChildren, children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className="relative  after:absolute after:h-[34px] 
        after:content-[''] after:top-5 after:left-0 after:right-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {hoverChildren}
      </div>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <div
            className="absolute bg-white border border-border-color p-4 lg:top-[84px] ssm:top-[96px] z-10 w-60 animate-fadeOut
      flex flex-col gap-y-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
