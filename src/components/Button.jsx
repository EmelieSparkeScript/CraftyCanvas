import React from "react";

const Button = ({ label, onClick, href, className }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-block bg-carbon-fiber text-white font-semibold leading-7 py-6 px-16 rounded ${className}`}
    >
      {label}
    </a>
  );
};

export default Button;
