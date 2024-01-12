import Image from 'next/image';
import izh from '@/public/concert/c.jpg';
import vrn from '@/public/concert/vrn.jpg';
import { ImLocation2 } from 'react-icons/im';
import { ImVk } from 'react-icons/im';
import Link from 'next/link';
import { ConcertData } from '@/app/types';
export const Concerts = () => {
  const concerts: ConcertData[] = [
    {
      date: '23 марта (сб)',
      city: 'Ижевск',
      location: 'IZH_ROCK_CLUB /BARROCK/',
      image: izh,
      vkLink: 'https://vk.com/addizh23',
      ticketsLink:
        'https://izhevsk.qtickets.events/96508-addicted-5-letie-gruppy-23-marta',
    },
    {
      date: '30 марта (сб)',
      city: 'Воронеж',
      location: 'Сто ручьев',
      image: vrn,
      vkLink: 'https://vk.com/addvrn23',
      ticketsLink:
        'https://voronezh.qtickets.events/97618-addicted-5-let-sto-ruchev',
    },
  ];

  return (
    <div className='flex flex-col items-center'>
      {/*начало блока концерта*/}
      {concerts.map((concert) => (
        <div
          key={concert.date}
          className={
            'my-5 flex flex-col place-items-center justify-center md:flex-row'
          }
        >
          <Image
            className={'mx-2.5 aspect-square w-1/2 md:w-1/3'}
            src={concert.image}
            alt={'concert'}
          />
          <div className={'m-2.5 flex  w-1/2 flex-col space-y-5 md:w-1/4'}>
            <h5 className='border-b-amber-100 text-center text-2xl font-bold text-white outline-4 md:text-left'>
              {concert.date}
            </h5>
            <h5 className='border-b-amber-100 text-center text-xl font-bold text-white outline-4 md:text-left'>
              {concert.city}
            </h5>
            <div
              className={
                'flex flex-row place-items-center space-x-1.5 text-center text-white md:text-left'
              }
            >
              <ImLocation2 size={32} />
              <div className={'font-semibold'}>{concert.location}</div>
            </div>
            <Link
              href={concert.vkLink}
              target={'_blank'}
              rel='noopener noreferrer'
              className={
                'flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white hover:bg-white hover:text-black'
              }
            >
              <ImVk className={'absolute mr-32'} size={32} />
              Встреча
            </Link>
            <Link
              href={concert.ticketsLink}
              target={'_blank'}
              rel='noopener noreferrer'
              className={
                'flex flex-row place-items-center justify-around border-2 border-white py-3 uppercase text-white hover:bg-white hover:text-black'
              }
            >
              Билеты
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
