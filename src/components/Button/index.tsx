import React from "react";
interface ButtonProps {
  children: string;
  isPill?: boolean;
  isRound?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isPill, isRound }) => {
  return (
    <React.Fragment>
      {isPill && (
        <button
          type="button"
          className="text-white bg-secondary hover:bg-secondary font-medium rounded-full text-sm px-5 py-2 text-center"
        >
          {children}
        </button>
      )}
      {isRound && (
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Blue
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;
