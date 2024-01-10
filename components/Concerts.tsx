import Image from "next/image";
import concert from '@/public/concert/c.jpg'
import { ImLocation2 } from "react-icons/im";
import { ImVk } from "react-icons/im";
import Link from "next/link";
const Concerts = () => {

    return (
            <div className="flex flex-col items-center">

                {/*<div className="w-[100svw] text-center">*/}
                {/*    <h1 className={'text-white text-2xl'}>Предстоящие концерты:</h1>*/}
                {/*</div>*/}
                {/*начало блока концерта*/}
                <div className={'flex flex-col justify-center my-5 md:flex-row place-items-center'}>
                    <Image className={'w-1/2 aspect-square mx-2.5 md:w-1/3'} src={concert} alt={'concert'}/>
                    <div className={'flex flex-col  space-y-5 m-2.5'}>
                        <h5 className="font-bold border-b-amber-100 text-2xl text-white outline-4 text-center md:text-left">
                            23 марта (сб)
                        </h5>
                        <h5 className="font-bold border-b-amber-100 text-xl text-white outline-4 text-center md:text-left">
                            Ижевск
                        </h5>
                        <div className={'flex flex-row text-white place-items-center space-x-1.5 text-center md:text-left'}>
                            <ImLocation2 size={32}/>
                            <div className={'font-semibold'}>
                                IZH_ROCK_CLUB /BARROCK/
                            </div>
                        </div>
                        <Link
                            href={'https://vk.com/addizh23'}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            className={'flex flex-row uppercase justify-around place-items-center text-white border-white border-2 py-3 hover:bg-white hover:text-black'}>
                            <ImVk className={'absolute mr-32'} size={32}/>
                            Встреча
                        </Link>
                        <Link
                            href={'https://izhevsk.qtickets.events/96508-addicted-5-letie-gruppy-23-marta'}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            className={'flex flex-row uppercase justify-around place-items-center text-white border-white border-2 py-3 hover:bg-white hover:text-black'}>
                            Билеты
                        </Link>
                    </div>
                </div>
                {/*начало блока концерта*/}
                <div className={'flex flex-col justify-center my-5 md:flex-row place-items-center'}>
                    <Image className={'w-1/2 aspect-square mx-2.5 md:w-1/3'} src={concert} alt={'concert'}/>
                    <div className={'flex flex-col  space-y-5 m-2.5'}>
                        <h5 className="font-bold border-b-amber-100 text-2xl text-white outline-4 text-center md:text-left">
                            23 марта (сб)
                        </h5>
                        <h5 className="font-bold border-b-amber-100 text-xl text-white outline-4 text-center md:text-left">
                            Ижевск
                        </h5>
                        <div className={'flex flex-row text-white place-items-center space-x-1.5 text-center md:text-left'}>
                            <ImLocation2 size={32}/>
                            <div className={'font-semibold'}>
                                IZH_ROCK_CLUB /BARROCK/
                            </div>
                        </div>
                        <Link
                            href={'https://vk.com/addizh23'}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            className={'flex flex-row uppercase justify-around place-items-center text-white border-white border-2 py-3 hover:bg-white hover:text-black'}>
                            <ImVk className={'absolute mr-32'} size={32}/>
                            Встреча
                        </Link>
                        <Link
                            href={'https://izhevsk.qtickets.events/96508-addicted-5-letie-gruppy-23-marta'}
                            target={'_blank'}
                            rel="noopener noreferrer"
                            className={'flex flex-row uppercase justify-around place-items-center text-white border-white border-2 py-3 hover:bg-white hover:text-black'}>
                            Билеты
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Concerts;
