import Link from "next/link";
import { ImVk } from 'react-icons/im';
import { ImYoutube } from "react-icons/im";
import { ImTelegram } from "react-icons/im";
import {ContactData} from "@/app/types";
const Contacts = () => {
    const contacts: ContactData = {
        vk:'https://vk.com/addicted.gang',
        youtube:'https://www.youtube.com/@addicted8546',
        tg:'https://t.me/addictedlive',
        emailLink:'mailto:test@email.com',
        phoneLink:'tel:88005553535',
    }

    return (
        <div className={'w-full justify-center flex flex-col place-items-center'}>
            <span className={'text-white text-2xl uppercase font-semibold'}>Наши соцсети:</span>
            <div className={'flex flex-row bg w-2/3 h-fit justify-evenly mt-10 mb-5 md:w-1/3'}>
                <a
                    className={'text-white hover:text-gray-300'}
                    href={contacts.vk}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <ImVk
                        size={56}/>
                </a>
                <a
                    className={'text-white hover:text-gray-300'}
                    href={contacts.tg}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <ImTelegram size={56}/>
                </a>
                <a
                    className={'text-white hover:text-gray-300'}
                    href={contacts.youtube}
                    target={'_blank'}
                    rel='noopener noreferrer'
                >
                    <ImYoutube size={56}/>
                </a>
            </div>
            <span className={'text-white text-2xl uppercase font-semibold text-center'}>По вопросам организации концертов:</span>
            <div className={'flex flex-col place-items-center my-10 w-1/2 space-y-10 md:space-y-0 md:justify-evenly md:flex-row'}>
            <a
                href={contacts.phoneLink}
                target={'_blank'}
                rel='noopener noreferrer'
                className={
                    'flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white hover:bg-white hover:text-black'
                }
            >
                <span className={'mx-7'}>Позвонить</span>
            </a>
                <a
                    href={contacts.emailLink}
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
