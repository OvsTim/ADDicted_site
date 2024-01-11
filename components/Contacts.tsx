import Link from "next/link";
import { ImVk } from 'react-icons/im';
import { ImYoutube } from "react-icons/im";
import { ImTelegram } from "react-icons/im";
const Contacts = () => {

    return (
        <div className={'w-full justify-center flex flex-col place-items-center'}>
            <span className={'text-white text-2xl uppercase font-semibold'}>Наши соцсети:</span>
            <div className={'flex flex-row bg w-2/3 h-fit justify-evenly mt-10 mb-5 md:w-1/3'}>
                <a
                    className={'text-white hover:text-gray-300'}
                    href={'https://vk.com/addicted.gang'}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <ImVk
                        size={56}/>
                </a>
                <a
                    className={'text-white hover:text-gray-300'}
                    href={'https://t.me/addictedlive'}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <ImTelegram size={56}/>
                </a>
                <a
                    className={'text-white hover:text-gray-300'}
                    href={'https://www.youtube.com/@addicted8546'}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <ImYoutube size={56}/>
                </a>
            </div>
            <span className={'text-white text-2xl uppercase font-semibold text-center'}>По вопросам организации концертов:</span>
            <div className={'flex flex-col place-items-center my-10 w-1/2 space-y-10 md:space-y-0 md:justify-evenly md:flex-row'}>
            <a
                href={"tel:88005553535"}
                target={'_blank'}
                rel='noopener noreferrer'
                className={
                    'flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white hover:bg-white hover:text-black'
                }
            >
                <span className={'mx-7'}>Позвонить</span>
            </a>
                <a
                    href={"mailto:test@email.com"}
                    target={'_blank'}
                    rel='noopener noreferrer'
                    className={
                        'flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white hover:bg-white hover:text-black'
                    }
                >
                    <span className={'mx-7'}>Написать</span>
                </a>
            </div>
        </div>
    )
}

export default Contacts;
