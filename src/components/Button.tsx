import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "navbar" | "white-bg" | "transparent-bg";
}

export const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  const baseStyles =
    "text-sm sm:text-base rounded-lg px-4 py-2 sm:px-7 sm:py-3 transition-colors duration-300 relative overflow-hidden group";

  const variantStyles = {
    navbar: "bg-black text-white",
    "white-bg": "bg-white text-black hover:bg-transparent hover:text-white hover:border hover:border-white",
    "transparent-bg": "bg-transparent border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      <span className='relative inline-flex overflow-hidden'>
        <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>
          {children}
        </div>
        <div className='absolute inset-0 translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
          {children}
        </div>
      </span>
    </button>
  );
};
