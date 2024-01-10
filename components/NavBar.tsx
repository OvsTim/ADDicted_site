import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from '../public/logo_white.png'
import logo_horizontal from '../public/logo_horiziotal.png'
import { ImMusic } from "react-icons/im";
import { ImBubble2 } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
const Navbar = () => {

    return (
        <div>
             <div className={'bg-black m-auto h-full flex flex-col place-items-center md:flex-row md:place-content-between border-b-[1px] '}>
                 <Image
                     className={'w-10/12 p-[50px] md:hidden'}
                     src={logo_horizontal} alt={'logo'}/>
                 <Image
                     className={'m-2 p-5 aspect-auto w-[100px] hidden md:w-[125px] md:flex lg:w-[150px]'}
                     src={logo} alt={'logo'}/>
                 <div className={'w-2/3 h-full py-10 hidden place-content-evenly place-items-center md:flex'}>
                     <Link
                         className={'text-white text-xl flex flex-row place-items-center'}
                         href={'/'}>
                         <ImCalendar size={24}/>
                         <span className={'mx-2.5 text-2xl uppercase'}>Концерты</span>
                     </Link>
                     <Link
                         className={'text-white text-xl flex flex-row place-items-center'}
                         href={'/'}>
                         <ImMusic size={24}/>
                         <span className={'mx-2.5 text-2xl uppercase'}>Музыка</span>
                     </Link>
                     <Link
                         className={'text-white text-xl flex flex-row place-items-center'}
                         href={'/'}>
                         <ImBubble2 size={24}/>
                         <span className={'mx-2.5 text-2xl uppercase'}>Контакты</span>
                     </Link>
                 </div>

             </div>
            <div
                className={'w-full space-y-7 py-5 bg-black place-content-evenly place-items-center flex flex-col md:hidden'}>
                <Link
                    className={'text-white text-xl flex flex-row place-items-center'}
                    href={'/'}>
                    <ImCalendar size={16}/>
                    <span className={'ml-2.5 uppercase'}>Концерты</span>
                </Link>
                <Link
                    className={'text-white text-xl flex flex-row place-items-center'}
                    href={'/'}>
                    <ImMusic size={16}/>
                    <span className={'ml-2.5 uppercase'}>Музыка</span>
                </Link>
                <Link
                    className={'text-white text-xl flex flex-row place-items-center'}
                    href={'/'}>
                    <ImBubble2 size={16}/>
                    <span className={'ml-2.5 uppercase'}>Контакты</span>
                </Link>
                <hr className={'w-full bg-white h-[1px]'}/>
            </div>
        </div>
    );
};

export default Navbar;