
import {Concerts} from "@/components/Concerts";
import {Album} from "@/components/Album";
import {Contacts} from "@/components/Contacts";
import {Footer} from "@/components/Footer";
import Link from "next/link";
import {Slider} from "@/components/Slider";
import {GoToTopButton} from "@/components/GoToTopButton";
import Image from "next/image";
import chartova from '@/public/chart_12.webp'

export default function Home() {

  return (
    <div className={'relative m-auto h-full w-full'}>
      <main className='m-auto flex flex-col place-items-center bg-black'>
        <div className='relative h-full w-[100%] py-5 lg:w-[1024px]'>
          {/*<Slider/>*/}
          {/*<div className="z-40 absolute bottom-0 px-4 py-3 w-full h-full space-y-5 place-items-center md:place-items-start justify-center flex flex-col lg:w-[1024px] md:space-y-20">*/}
          {/*    <span className="text-white font-bold text-3xl mx-2.5 my-2.5 md:text-4xl break-words">{"Презентация сингла/осенний тур " +*/}
          {/*        "2024"}</span>*/}
          {/*    <div className={'flex flex-col space-y-5 space-x-0 place-items-center w-full md:w-1/2 md:flex-row justify-center h-fit md:space-y-0 md:space-x-5'}>*/}
          {/*        <Link*/}
          {/*            id={'listenAlbum'}*/}
          {/*            href={'#album'}*/}
          {/*            className={*/}
          {/*                'bg-gray-500/50 w-2/3 flex flex-row place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black md:w-full md:text-xl'*/}
          {/*            }*/}
          {/*        >*/}
          {/*            Послушать*/}
          {/*        </Link>*/}
          {/*        <Link*/}
          {/*            id={'buyTickets'}*/}
          {/*            href={'#concerts'}*/}
          {/*            className={*/}
          {/*                'bg-gray-500/50 w-2/3 flex flex-row place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black md:w-full md:text-xl'*/}
          {/*            }*/}
          {/*        >*/}
          {/*            Увидеть*/}
          {/*        </Link>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <iframe
            className={'aspect-video h-[50%] w-full  lg:w-[1024px]'}
            src='https://vk.com/video_ext.php?oid=-2000037007&id=133037007&hd=3&hash=e19608a4e5ad0464'
            width='1280'
            height='720'
            allow='autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;'
            allowFullScreen
          ></iframe>
        </div>
        {/*<h1 className={'mv-5 text-white font-bold text-2xl lg:w-[700px] w-3/4 text-center md:text-3xl'}>*/}
        {/*    {"Голосуй за нас в \"Чартовой дюжине\" каждый день!"}</h1>*/}
        {/*<Image className={'lg:w-[700px] w-3/4 mt-10'} src={chartova} alt={'chartova'}/>*/}
        {/*<a*/}
        {/*    id={'contactRaider'}*/}
        {/*    href={'https://www.nashe.ru/chartova'}*/}
        {/*    target={'_blank'}*/}
        {/*    rel='noopener noreferrer'*/}
        {/*    className={*/}
        {/*        'mt-10 w-1/2 px-10 flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white text-center hover:bg-white hover:text-black'*/}
        {/*    }*/}
        {/*>*/}
        {/*    <span className={'mx-7 my-1'}>Проголосовать</span>*/}
        {/*</a>*/}
        {/*<Gallery/>*/}
        <div id={'concerts'} className={'h-[137px] w-full md:h-[189px]'} />
        <Concerts />
        <div id={'album'} className={' h-[137px] w-full md:h-[189px]'} />
        <Album />
        <div id={'contacts'} className={' md:h-[189px h-[137px] w-full'} />
        <Contacts />
        <Footer />
      </main>
      <GoToTopButton />
    </div>
  );
}
