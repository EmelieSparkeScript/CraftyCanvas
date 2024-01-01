import React from 'react'

function GalleryCard({img, title, children}) {
  return (
    <div>
        <img src={img} alt="Project work" />
        <h2 className="font-semibold leading-7 text-xl mt-4 mb-1">{title}</h2>
        <p>{children}</p>
    </div>
  )
}

export default GalleryCard