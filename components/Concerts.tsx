import Image from 'next/image';
import concert from '@/public/concert/c.jpg';
import { ImLocation2 } from 'react-icons/im';
import { ImVk } from 'react-icons/im';
import Link from 'next/link';
const Concerts = () => {
  return (
    <div className='flex flex-col items-center'>
      {/*<div className="w-[100svw] text-center">*/}
      {/*    <h1 className={'text-white text-2xl'}>Предстоящие концерты:</h1>*/}
      {/*</div>*/}
      {/*начало блока концерта*/}
      <div
        className={
          'my-5 flex flex-col place-items-center justify-center md:flex-row'
        }
      >
        <Image
          className={'mx-2.5 aspect-square w-1/2 md:w-1/3'}
          src={concert}
          alt={'concert'}
        />
        <div className={'m-2.5 flex  flex-col space-y-5'}>
          <h5 className='border-b-amber-100 text-center text-2xl font-bold text-white outline-4 md:text-left'>
            23 марта (сб)
          </h5>
          <h5 className='border-b-amber-100 text-center text-xl font-bold text-white outline-4 md:text-left'>
            Ижевск
          </h5>
          <div
            className={
              'flex flex-row place-items-center space-x-1.5 text-center text-white md:text-left'
            }
          >
            <ImLocation2 size={32} />
            <div className={'font-semibold'}>IZH_ROCK_CLUB /BARROCK/</div>
          </div>
          <Link
            href={'https://vk.com/addizh23'}
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
            href={
              'https://izhevsk.qtickets.events/96508-addicted-5-letie-gruppy-23-marta'
            }
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
      {/*начало блока концерта*/}
      <div
        className={
          'my-5 flex flex-col place-items-center justify-center md:flex-row'
        }
      >
        <Image
          className={'mx-2.5 aspect-square w-1/2 md:w-1/3'}
          src={concert}
          alt={'concert'}
        />
        <div className={'m-2.5 flex  flex-col space-y-5'}>
          <h5 className='border-b-amber-100 text-center text-2xl font-bold text-white outline-4 md:text-left'>
            23 марта (сб)
          </h5>
          <h5 className='border-b-amber-100 text-center text-xl font-bold text-white outline-4 md:text-left'>
            Ижевск
          </h5>
          <div
            className={
              'flex flex-row place-items-center space-x-1.5 text-center text-white md:text-left'
            }
          >
            <ImLocation2 size={32} />
            <div className={'font-semibold'}>IZH_ROCK_CLUB /BARROCK/</div>
          </div>
          <Link
            href={'https://vk.com/addizh23'}
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
            href={
              'https://izhevsk.qtickets.events/96508-addicted-5-letie-gruppy-23-marta'
            }
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
    </div>
  );
};

export default Concerts;
