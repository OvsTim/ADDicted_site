
import {Concerts} from "@/components/Concerts";
import {Album} from "@/components/Album";
import {Contacts} from "@/components/Contacts";
import {Footer} from "@/components/Footer";
import Link from "next/link";
import {Slider} from "@/components/Slider";
import {GoToTopButton} from "@/components/GoToTopButton";

export default function Home() {

  return (
    <div className={'relative m-auto h-full w-full'}>
        <main className='m-auto flex flex-col place-items-center bg-black'>
            <div className="h-full w-[100%] relative lg:w-[1024px] py-5">
                <Slider/>
                <div className="z-40 absolute bottom-0 px-4 py-3 w-full h-full space-y-5 place-items-center md:place-items-start justify-center flex flex-col lg:w-[1024px] md:space-y-20">
                    <span className="text-white font-bold text-2xl mx-2.5 my-2.5 md:text-4xl"> Новый альбом/тур 2024</span>
                    <div className={'flex flex-col space-y-5 space-x-0 place-items-center w-full md:w-1/2 md:flex-row justify-center h-fit md:space-y-0 md:space-x-5'}>
                        <Link
                            id={'listenAlbum'}
                            href={'#album'}
                            className={
                                'bg-gray-500/50 w-2/3 flex flex-row place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black md:w-full md:text-xl'
                            }
                        >
                            Послушать
                        </Link>
                        <Link
                            id={'buyTickets'}
                            href={'#concerts'}
                            className={
                                'bg-gray-500/50 w-2/3 flex flex-row place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black md:w-full md:text-xl'
                            }
                        >
                            Увидеть
                        </Link>
                    </div>
                </div>
            </div>
            {/*<Gallery/>*/}
            <div
                id={'concerts'}
                 className={'h-[137px] w-full md:h-[189px]'}/>
            <Concerts/>
            <div id={'album'} className={' md:h-[189px] h-[137px] w-full'}/>
            <Album/>
            <div id={'contacts'} className={' md:h-[189px h-[137px] w-full'}/>
            <Contacts/>
            <Footer/>
        </main>
        <GoToTopButton/>
    </div>
  );
}
