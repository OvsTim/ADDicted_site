'use client';
import Link from 'next/link';
import { ConcertData } from '@/app/types';
import {useEffect, useState} from "react";
export const Concerts = () => {

    const [concerts, setConcerts] = useState<ConcertData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchConcerts = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/concerts');

            if (!response.ok) {
                throw new Error('Failed to fetch concerts');
            }

            const data:ConcertData[] = await response.json();
            setConcerts(data.filter(it=>new Date(it.date).getTime() > new Date().getTime()));
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchConcerts();
    }, []);


  return (
    <div className='flex flex-col items-start m-auto lg:w-[1024px] w-full px-10 lg:px-0' >
        {loading &&
        <h3 className={'text-white text-2xl content-center w-full text-center py-20 md:text-4xl'}>
          Загрузка ...
        </h3>
        }
      {concerts.length === 0 && !loading &&
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
              {concert.dateEnd?new Date(concert.date).toLocaleDateString("ru-RU",{month:"long",day:"numeric"})+' - '+new Date(concert.dateEnd).toLocaleDateString("ru-RU",{month:"long",day:"numeric"})
                  : new Date(concert.date).toLocaleDateString("ru-RU",{month:"long",day:"numeric"})}
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
