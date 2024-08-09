import Link from 'next/link';
import { ConcertData } from '@/app/types';
export const Concerts = () => {
  const concerts: ConcertData[] = [
    {
      date:'15 июня (сб)',
      city:'BLACK 7 RUSSIAN RUN',
      location:'Ивановская область, Тейковский район, курортный отель "Чайка"',
      vkLink:'https://vk.com/black7run',
      slug:'b7r_2022',
    },
    {
      date:'22 июня (сб)',
      city:'ANTI-PARTY!',
      location:'Калужская область, деревня Тайдашево, база отдыха "Головинка"',
      vkLink:'https://vk.com/antiparty24',
      ticketsLink:'https://moscow.qtickets.events/88219-anti-party-2024',
      slug:'anti_2024',
    },
    {
      date:'6 июля (сб)',
      city:'29 FEST',
      location:'Архангельск, загородный клуб «Кантри Клаб», Заостровье',
      vkLink:'https://vk.com/29fest',
      ticketsLink:'https://afisha29.intickets.ru/seance/14894641/',
      slug:'arch_2022',
    },
    {
      date:'11-13 июля',
      city:'УЛЕТАЙ',
      location:'с. Лагуново, Сарапульский район, Удмуртия',
      vkLink:'https://vk.com/uletayfest',
      ticketsLink:'https://drivegrup.ru/ticket/drive',
      slug:'msk_2022',
    },
    {
      date:'17 августа',
      city:'Ковчег',
      location:'с Еремейцево, Ярославская область',
      vkLink:'https://vk.com/nebofest76',
      // ticketsLink:'https://moscow.qtickets.events/93120-addicted-5-let-moskva',
      slug:'kovcheg',
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
