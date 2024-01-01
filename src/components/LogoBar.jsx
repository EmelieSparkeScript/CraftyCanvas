import React from 'react';
import google from "../assets/google.svg";
import nike from "../assets/nike.svg";
import samsung from "../assets/samsung.svg";
import apple from "../assets/apple.svg";
import adidas from "../assets/adidas.png";

function LogoBar() {
  return (
    <ul className='flex flex-col md:flex-row justify-between px-4 md:px-16 py-10'>
      <li><img src={google} alt="Google logo" /></li>
      <li><img src={nike} alt="Nike logo" /></li>
      <li><img src={samsung} alt="Samsung logo" /></li>
      <li><img src={apple} alt="Apple logo" /></li>
      <li><img src={adidas} alt="Adidas logo" /></li>
    </ul>
  );
}

export default LogoBar;
