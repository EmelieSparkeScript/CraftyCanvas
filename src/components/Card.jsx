import React from 'react';

function Card({ typeSkill,img,title,children }) {
  return (
    <>
      {typeSkill ? (
       <li className='text-center py-16'>
        <img className='mx-auto' src={img} alt="desc" />
        <h2 className="font-semibold leading-7 text-xl mt-11 mb-3">{title}</h2>
        <p>{children}</p>
       </li>
      ) : (
        <p>This content is displayed if skillType is falsy.</p>
      )}
    </>
  );
}

export default Card;
