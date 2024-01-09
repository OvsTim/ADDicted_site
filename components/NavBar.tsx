'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logo from '../public/logo.jpg'
import { ImMusic } from "react-icons/im";
import { ImBubble2 } from "react-icons/im";
import { ImCalendar } from "react-icons/im";
const Navbar = () => {

    return (
        <div>
            <div className={'bg-black w-full m-auto h-full  flex place-content-between flex-row'}>
                <Image
                    className={'aspect-auto w-[100px] md:w-[125px] lg:w-[150px]'}
                    src={logo} alt={'logo'}/>
                <div className={'w-1/2 bg-red-600 hidden place-content-evenly place-items-center md:flex'}>
                    <Link
                        className={'text-white text-sm flex flex-row place-items-center lg:text-xl'}
                        href={'/'}>
                        <ImCalendar/>
                        <span className={'ml-2.5'}>Концерты</span>
                    </Link>
                    <Link
                        className={'text-white text-sm flex flex-row place-items-center lg:text-xl'}
                        href={'/'}>
                        <ImMusic/>
                        <span className={'ml-2.5'}>Музыка</span>
                    </Link>
                    <Link
                        className={'text-white text-sm flex flex-row place-items-center lg:text-xl'}
                        href={'/'}>
                        <ImBubble2/>
                        <span className={'ml-2.5'}>Контакты</span>
                    </Link>
                </div>

            </div>
            <div className={'w-full space-y-2 py-2 bg-red-600 place-content-evenly place-items-center flex flex-col md:hidden'}>
                <Link
                    className={'text-white text-xl flex flex-row place-items-center'}
                    href={'/'}>
                    <ImCalendar/>
                    <span className={'ml-2.5'}>Концерты</span>
                </Link>
                <Link
                    className={'text-white text-xl flex flex-row place-items-center'}
                    href={'/'}>
                    <ImMusic/>
                    <span className={'ml-2.5'}>Музыка</span>
                </Link>
                <Link
                    className={'text-white text-xl flex flex-row place-items-center'}
                    href={'/'}>
                    <ImBubble2/>
                    <span className={'ml-2.5'}>Контакты</span>

                </Link>
            </div>
        </div>
    );
};

export default Navbar;
