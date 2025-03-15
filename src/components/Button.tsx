import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "navbar" | "white-bg" | "transparent-bg" | "gold";
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant, children, href, target, ...props }) => {
  const baseStyles =
    "text-sm sm:text-base rounded-lg px-4 py-2 transition-colors duration-300 relative overflow-hidden group";

  const variantStyles = {
    navbar: "bg-navy-800 text-white shadow-large",
    "white-bg": "bg-white text-black border border-white",
    "transparent-bg": "bg-transparent text-navy-800 border border-navy-800",
    gold: "bg-[#d5962b] text-[#131a24]",
  };

  const content = (
    <span className='relative inline-flex overflow-hidden'>
      <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-20'>
        {children}
      </div>
      <div className='absolute inset-0 translate-y-[164%] skew-y-20 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
        {children}
      </div>
    </span>
  );

  if (href) {
    return (
      <a href={href} target={target} className={`${baseStyles} ${variantStyles[variant]}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {content}
    </button>
  );
};
