import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image0 from '@/public/image.webp';
import image1 from '@/public/gallery/1.webp';
import image2 from '@/public/gallery/2.webp';
import image3 from '@/public/gallery/3.webp';
import image4 from '@/public/gallery/4.webp';
import image5 from '@/public/gallery/5.webp';
import image6 from '@/public/gallery/6.webp';
import image7 from '@/public/gallery/7.webp';
import image8 from '@/public/gallery/8.webp';
import 'swiper/css';

import { Autoplay,} from 'swiper/modules';
import Image from "next/image";

export const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image0}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image2}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image3}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image4}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image5}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image6}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image7}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt='gallery'
                        className='block h-full w-full object-cover object-center opacity-70'
                        src={image8}
                    />

                </SwiperSlide>

            </Swiper>
        </>
    );
}
