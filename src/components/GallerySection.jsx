import React from 'react'
import GalleryCard from './GalleryCard';
import galleryImgOne from "../assets/galleryImgOne.png";
import galleryImgTwo from "../assets/galleryImgTwo.png";
import galleryImgThree from "../assets/galleryImgThree.png";

function GallerySection() {
  return (
    <section>
        <h2 className="font-semibold leading-7 text-xl text-center mt-11 mb-3">Latest Work</h2>
        <div className='grid grid-cols-3 gap-4'>
            <GalleryCard img={galleryImgOne} title="Project title" >UI, Art direction</GalleryCard>
            <GalleryCard img={galleryImgTwo} title="Project title" >UI, Art direction</GalleryCard>
            <GalleryCard img={galleryImgThree} title="Project title" >UI, Art direction</GalleryCard>
            <GalleryCard img={galleryImgOne} title="Project title" >UI, Art direction</GalleryCard>
            <GalleryCard img={galleryImgTwo} title="Project title" >UI, Art direction</GalleryCard>
            <GalleryCard img={galleryImgThree} title="Project title" >UI, Art direction</GalleryCard>
        </div>
    </section>
  )
}

export default GallerySection