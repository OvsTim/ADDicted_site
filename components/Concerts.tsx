import Link from 'next/link';
import { ConcertData } from '@/app/types';
export const Concerts = () => {
  const concerts: ConcertData[] = [
    {
      date:'24-27 июля',
      city:'ПЛЯЖ',
      location:'Челябинск, территория Тишки',
      vkLink:'https://vk.com/beachfest74',
      ticketsLink:'https://beach-fest.ru/',
      slug:'plyaj',
    },
    {
      date:'22-23 августа',
      city:'Абалак рок-фест',
      location:'Тобольск, Парк отдыха "Абалак"',
      vkLink:'https://vk.com/abalakrockfest',
      ticketsLink:'https://zagorodnyy-kompleks-abala.timepad.ru/event/3295857/#register',
      slug:'abalak',
    },
    {
      date:'30 августа',
      city:'RECA FEST',
      location:'BASE Spb',
      vkLink:'https://vk.com/club231172460',
      ticketsLink:'https://vk.com/app7371599_-231172460#events2476064',
      slug:'recaspb',
    },
    {
      date:'6 сентября',
      city:'RECA FEST',
      location:'BASE Msk',
      vkLink:'https://vk.com/recafest_msk25',
      ticketsLink:'https://vk.com/app7371599_-231172262#events2476061',
      slug:'recamsk',
    },
    {
      date:'8 ноября',
      city:'Архангельск',
      location:'Колесо',
      vkLink:'https://vk.com/club231472257',
      ticketsLink:'https://qtickets.ru/event/173274',
      slug:'arch',
    },
{
      date:'15 ноября',
      city:'Санкт-Петербург',
      location:'Action Club',
      vkLink:'https://vk.com/club231494757',
      ticketsLink:'https://vk.com/app53892942_-231494757',
      slug:'spb',
    },
{
      date:'16 ноября',
      city:'Москва',
      location:'Eclipse',
      vkLink:'https://vk.com/club231495796',
      ticketsLink:'https://vk.com/app53892945_-231495796',
      slug:'msk',
    },
{
      date:'21 ноября',
      city:'Воронеж',
      location:'Diesel Bar',
      vkLink:'https://vk.com/club231496254',
      ticketsLink:'https://vk.com/app53885340_-231496254',
      slug:'vrn',
    },
{
      date:'22 ноября',
      city:'Краснодар',
      location:'Сержант Пеппер',
      vkLink:'https://vk.com/club231496734',
      ticketsLink:'https://vk.com/app53885342_-231496734',
      slug:'krs',
    },
{
      date:'23 ноября',
      city:'Ростов-на-Дону',
      location:'Pod3emka',
      vkLink:'https://vk.com/club231497136',
      ticketsLink:'https://vk.com/app53885343_-231497136',
      slug:'rnd',
    },
{
      date:'5 декабря',
      city:'Иваново',
      location:'AL ROCK',
      vkLink:'https://vk.com/club231497624',
      ticketsLink:'https://vk.com/app53885347_-231497624',
      slug:'iva',
    },
{
      date:'6 декабря',
      city:'Рыбинск',
      location:'Перекресток',
      vkLink:'https://vk.com/club231497960',
      ticketsLink:'https://vk.com/app53885350_-231497960',
      slug:'ryb',
    },
  ];


  return (
    <div className='flex flex-col items-start m-auto lg:w-[1024px] w-full px-10 lg:px-0' >
      {concerts.length === 0 &&
      <h3 className={'text-white text-2xl content-center w-full text-center py-20 md:text-4xl'}>
        Концерты завершены. Новые даты скоро!
      </h3>

      }
      {/*начало блока концерта*/}
      {concerts.map((concert) => (
        <div
          key={concert.date}
          className={
            'my-1 py-2 flex flex-col w-full border-b-2 border-[#515151] md:flex-row lg:w-[1000px] lg:place-items-center lg:justify-between px-4'
          }
        >
          <div className={'flex flex-col place-content-start md:flex-row place-items-center w-full md:space-x-2'}>
            <h5 className='w-full text-xl font-bold text-white md:w-1/2 text-left md:text-center md:text-2xl'>
              {concert.date}
            </h5>
            <h5 className=' w-full text-2xl text-left font-bold text-white md:w-1/3 md:text-xl md:text-center'>
              {concert.city}
            </h5>
              <div className={'font-semibold text-left text-sm w-full text-white py-1.5 md:py-0 md:w-1/2 lg:text-center md:text-xl'}>{concert.location}</div>
          </div>
          {concert.ticketsLink?
              (
                  <div className={'flex flex-row place-items-center my-5 md:my-0'}>
                    <Link
                        id={concert.slug+'_vkLink'}
                        href={concert.vkLink}
                        target={'_blank'}
                        rel='noopener noreferrer'
                        className={
                          'w-1/2 flex flex-row place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black mx-5'
                        }
                    >
                      Встреча
                    </Link>
                    {concert.ticketsLink && <Link
                        id={concert.slug+'_ticketsLink'}
                        href={concert.ticketsLink}
                        target={'_blank'}
                        rel='noopener noreferrer'
                        className={
                          'w-1/2 flex flex-row place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black'
                        }
                    >
                      Билеты
                    </Link>}
                  </div>
              )
                  :
              (
                  <div className={'flex place-items-center my-5 md:my-0 w-full lg:w-[40%] md:w-[410px]'}>
                    <Link
                        id={concert.slug + '_vkLink'}
                        href={concert.vkLink}
                        target={'_blank'}
                        rel='noopener noreferrer'
                        className={
                          'w-full flex place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black ml-6'
                        }
                    >
                      Встреча
                    </Link>
                  </div>
              )
          }
        </div>
      ))}
    </div>
  );
};
