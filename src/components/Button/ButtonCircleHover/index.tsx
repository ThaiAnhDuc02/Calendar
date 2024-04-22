import React, { Children, useState } from "react";

interface CircleHoverButtonProps {
  iconClassName?: string;
  onClick?: () => void;
  children?: string;
}

const CircleHoverButton: React.FC<CircleHoverButtonProps> = ({
  iconClassName,
  onClick,
  children,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <button
      className="py-2 px-2 flex justify-center items-center relative rounded-full overflow-hidden focus:outline-none "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-primary  rounded-full opacity-50 transition-all duration-600"></div>
      )}
      <span className={iconClassName}></span>
      {children}
    </button>
  );
};

export default CircleHoverButton;
