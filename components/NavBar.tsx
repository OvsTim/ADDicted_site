'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../public/logo_white.webp';
import { ImMusic } from 'react-icons/im';
import { ImBubble2 } from 'react-icons/im';
import { ImCalendar } from 'react-icons/im';



export const Navbar = () => {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <div className='sticky top-0 z-50 '>
      <header>
        <div
          className={
            'm-auto flex h-full flex-col place-items-center border-b-[1px] bg-black md:flex-row md:place-content-between '
          }
        >
          <button
              id={'home'}
              onClick={scrollToTop}>
          <Image
            className={
              'm-2 hidden aspect-auto w-[100px] p-5 md:flex md:w-[100px] lg:w-[124px] hover:scale-125 transition duration-500'
            }
            src={logo}
            alt={'logo'}
          />
          </button>
          <div
            className={
              'hidden h-full w-2/3 place-content-evenly place-items-center py-10 md:flex'
            }
          >
            <Link
              id='goConcerts'
              className={
                'flex flex-row place-items-center text-xl font-bold text-white hover:opacity-70'
              }
              href={'#concerts'}
            >
              <ImCalendar size={24} />
              <span className={'mx-2.5 text-2xl uppercase'}>Концерты</span>
            </Link>
            <Link
              id='goAlbum'
              className={
                'flex flex-row place-items-center text-xl font-bold text-white hover:opacity-70'
              }
              href={'#album'}
            >
              <ImMusic size={24} />
              <span className={'mx-2.5 text-2xl uppercase'}>Музыка</span>
            </Link>
            <Link
              id={'contactsLink'}
              className={
                'flex flex-row place-items-center text-xl font-bold text-white hover:opacity-70'
              }
              href={'#contacts'}
            >
              <ImBubble2 size={24} />
              <span className={'mx-2.5 text-2xl uppercase'}>Контакты</span>
            </Link>
          </div>
        </div>
        <div
          className={
            'mb-5 flex w-full flex-col place-content-evenly place-items-center space-y-7 bg-black pt-5 md:hidden'
          }
        >
          <Link
            id='link_concerts'
            className={
              'flex flex-row place-items-center text-xl font-bold text-white hover:opacity-70'
            }
            href={'#concerts'}
          >
            <ImCalendar size={16} />
            <span className={'ml-2.5 uppercase'}>Концерты</span>
          </Link>
          <Link
            id='goAlbums'
            className={
              'flex flex-row place-items-center text-xl font-bold text-white hover:opacity-70'
            }
            href={'#album'}
          >
            <ImMusic size={16} />
            <span className={'ml-2.5 uppercase'}>Музыка</span>
          </Link>
          <Link
            id={'contactsLink'}
            className={
              'flex flex-row place-items-center text-xl font-bold text-white hover:opacity-70'
            }
            href={'#contacts'}
          >
            <ImBubble2 size={16} />
            <span className={'ml-2.5 uppercase'}>Контакты</span>
          </Link>
          <hr className={'h-[1px] w-full bg-white'} />
        </div>
      </header>
    </div>
  );
};
