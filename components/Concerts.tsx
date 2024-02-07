import Link from 'next/link';
import { ConcertData } from '@/app/types';
export const Concerts = () => {
  const concerts: ConcertData[] = [
    {
      date: '22 марта (пт)',
      city: 'Пермь',
      location: 'Mix Bar',
      vkLink: 'https://vk.com/addperm24',
      ticketsLink:
          'https://perm.qtickets.events/102037-addicted-5-letie-gruppy-22-marta',
      slug:'per_2024',
    },
    {
      date: '23 марта (сб)',
      city: 'Ижевск',
      location: 'IZH_ROCK_CLUB /BARROCK/',
      vkLink: 'https://vk.com/addizh23',
      ticketsLink:
        'https://izhevsk.qtickets.events/96508-addicted-5-letie-gruppy-23-marta',
      slug:'izg_2024',
    },
    {
      date: '30 марта (сб)',
      city: 'Воронеж',
      location: 'Сто ручьев',
      vkLink: 'https://vk.com/addvrn23',
      ticketsLink:
        'https://voronezh.qtickets.events/97618-addicted-5-let-sto-ruchev',
      slug:'vrn_2024',
    },
    {
      date:'20 апреля (сб)',
      city:'Нижний Новгород',
      location:'Alcatraz',
      vkLink:'https://vk.com/addnino24',
      ticketsLink:'https://nnovgorod.qtickets.events/93421-addicted-5-let-nizhniy-novgorod',
      slug:'nino_2024',
    },
    {
      date:'27 апреля (сб)',
      city:'Ярославль',
      location:'Территория',
      vkLink:'https://vk.com/addyar23',
      ticketsLink:'https://yaroslavl.qtickets.events/97616-addicted-sellout-territoriya',
      slug:'yar_2024',
    },
    {
      date:'4 мая (сб)',
      city:'Киров',
      location:'Атмосфера',
      vkLink:'https://vk.com/addkirov24',
      ticketsLink:'https://kirov.qtickets.events/102039-addicted-5-letie-gruppy-4-maya',
      slug:'kir_2024',
    },
    {
      date:'18 мая (сб)',
      city:'Санкт-Петербург',
      location:'Zoccolo 2.0',
      vkLink:'https://vk.com/addspb24',
      ticketsLink:'https://spb.qtickets.events/93127-addicted-5-let-sankt-peterburg',
      slug:'spb_2024',
    },
    {
      date:'25 мая (сб)',
      city:'Москва',
      location:'Город',
      vkLink:'https://vk.com/addmsk',
      ticketsLink:'https://moscow.qtickets.events/93120-addicted-5-let-moskva',
      slug:'msk_2024',
    }
  ];

  return (
    <div className='flex flex-col items-start m-auto lg:w-[1024px] w-full px-10 lg:px-0' >
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
              {/*<ImVk className={'absolute mr-24'} size={32} />*/}
              Встреча
            </Link>
            <Link
              id={concert.slug+'_ticketsLink'}
              href={concert.ticketsLink}
              target={'_blank'}
              rel='noopener noreferrer'
              className={
                'w-1/2 flex flex-row place-items-center justify-around border-2 border-white py-3 px-5 uppercase text-white hover:bg-white hover:text-black'
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
