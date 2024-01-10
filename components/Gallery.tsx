import React from "react";
import image1 from '@/public/gallery/1.jpg'
import image2 from '@/public/gallery/2.jpg'
import image3 from '@/public/gallery/3.jpg'
import image4 from '@/public/gallery/4.jpg'
import image5 from '@/public/gallery/5.jpg'
import image6 from '@/public/gallery/6.jpg'
import image7 from '@/public/gallery/7.jpg'
import image8 from '@/public/gallery/8.jpg'
import Image from "next/image";
const Gallery = () => {

    return (
        <div className="container mx-auto px-5 py-2 pb-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image1}/>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image2}/>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image3}/>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image4}/>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image5}/>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image6}/>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image7}/>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap lg:w-1/4">
                    <div className="w-full">
                        <Image
                            alt="gallery"
                            className="block h-full w-full object-cover object-center"
                            src={image8}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery;
