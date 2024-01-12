'use client';
import Image from 'next/image';
import bigImage from '@/public/image.jpg';
import { FaArrowUp } from 'react-icons/fa';
import {Gallery} from "@/components/Gallery";
import {Concerts} from "@/components/Concerts";
import {Album} from "@/components/Album";
import {Contacts} from "@/components/Contacts";
import {Footer} from "@/components/Footer";

export default function Home() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={'relative m-auto h-full w-full'}>
      <main className='m-auto flex flex-col place-items-center bg-black'>
        <Image
          className={' my-10 w-full opacity-90 lg:w-[1024px]'}
          src={bigImage}
          alt={'title'}
        />
        <Gallery />
        <div id={'concerts'} className={' h-[137px] w-full md:h-[189px]'} />
        <Concerts />
        <div id={'album'} className={' md:h-[189px h-[137px] w-full'} />
        <Album />
        <div id={'contacts'} className={' md:h-[189px h-[137px] w-full'} />
        <Contacts />
        <Footer />
      </main>
      <button
        className='fixed bottom-20 right-10 rounded-3xl bg-gray-300 p-2.5 md:invisible'
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
