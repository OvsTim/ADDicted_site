import React from 'react';
import image1 from '@/public/gallery/1.webp';
import image2 from '@/public/gallery/2.webp';
import image3 from '@/public/gallery/3.webp';
import image4 from '@/public/gallery/4.webp';
import image5 from '@/public/gallery/5.webp';
import image6 from '@/public/gallery/6.webp';
import image7 from '@/public/gallery/7.webp';
import image8 from '@/public/gallery/8.webp';
import Image from 'next/image';
export const Gallery = () => {
  return (
    <div className='container mx-auto px-5 py-2 pb-12'>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image1}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image2}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image3}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image4}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image5}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image6}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image7}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap lg:w-1/4'>
          <div className='w-full'>
            <Image
              alt='gallery'
              className='block h-full w-full object-cover object-center'
              src={image8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
