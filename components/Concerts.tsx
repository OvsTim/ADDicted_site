import Link from 'next/link';
import { ConcertData } from '@/app/types';
export const Concerts = () => {
  const concerts: ConcertData[] = [
    {
      date:'11 января (сб)',
      city:'Москва',
      location:'Зимний Фестиваль "ANTI-PARTY!"',
      vkLink:'https://vk.com/winterantiparty2025',
      ticketsLink:'https://moscow.qtickets.events/135366-zimniy-festival-anti-party-2025',
      slug:'addicted_antpt',
    },
    {
      date:'9 апреля (ср)',
      city:'Самара',
      location:'No Name Bar',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52895999',
      slug:'addicted_samara',
    },
    {
      date:'11 апреля (пт)',
      city:'Челябинск',
      location:'Клуб OZZ',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52896000',
      slug:'addicted_chel',
    },
    {
      date:'12 апреля (сб)',
      city:'Екатеринбург',
      location:'Пристанище',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52896002',
      slug:'addicted_ekt',
    },
    {
      date:'13 апреля (вс)',
      city:'Пермь',
      location:'Ё-Бар',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52896003',
      slug:'addicted_perm',
    },
    {
      date:'15 апреля (вт)',
      city:'Ижевск',
      location:'Barrock',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52896040_-228850388',
      slug:'addicted_izh',
    },
    {
      date:'16 апреля (ср)',
      city:'Киров',
      location:'Рок-бар "PRB"',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52896042_-228850388',
      slug:'addicted_kirov',
    },
    {
      date:'17 апреля (чт)',
      city:'Казань',
      location:'Biblioteka',
      vkLink:'https://vk.com/winterantiparty2025',
      ticketsLink:'https://vk.com/app52896043_-228850388',
      slug:'addicted_kazan',
    },
    {
      date:'18 апреля (пт)',
      city:'Нижний Новгород',
      location:'Moriarty',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52896057_-228850388',
      slug:'addicted_nino',
    },
    {
      date:'19 апреля (сб)',
      city:'Ярославль',
      location:'Территория',
      vkLink:'https://vk.com/addictedtur',
      ticketsLink:'https://vk.com/app52896059_-228850388',
      slug:'addicted_antpt',
    },
    {
      date:'16 мая (пт)',
      city:'Москва',
      location:'Glastonberry',
      vkLink:'https://vk.com/club228850830',
      ticketsLink:'https://vk.com/app52896061_-228850388',
      slug:'addicted_msk',
    },
    {
      date:'17 мая (сб)',
      city:'Санкт-Петербург',
      location:'Action',
      vkLink:'https://vk.com/club228850689',
      ticketsLink:'https://vk.com/app52896062_-228850388',
      slug:'addicted_spb',
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
