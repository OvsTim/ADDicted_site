"use client"
import Image from 'next/image';
import bigImage from '@/public/image.jpg';
import Gallery from '@/components/Gallery';
import Concerts from '@/components/Concerts';
import Album from '@/components/Album';
import {FaArrowUp} from "react-icons/fa";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className={'relative w-full h-full m-auto'}>
            <main className='m-auto flex flex-col place-items-center bg-black'>
                <Image
                    className={' my-10 w-full lg:w-[1024px]'}
                    src={bigImage}
                    alt={'title'}
                />
                <Gallery/>
                <div id={'concerts'} className={' w-full h-[137px] md:h-[169px]'}/>
                <Concerts/>
                <div id={'album'} className={' w-full h-[137px] md:h-[169px'}/>
                <Album/>
                <div id={'contacts'} className={' w-full h-[137px] md:h-[169px'}/>
                <Contacts/>
                <Footer/>
            </main>
            <button className="fixed bottom-10 p-2.5 bg-gray-300 right-10 rounded-3xl md:invisible"
                    onClick={scrollToTop}>
                <FaArrowUp/>
            </button>
        </div>
    );
}
