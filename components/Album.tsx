import Image from 'next/image';
import cover from '@/public/album/rave.jpg';
import vk from '@/public/music/vk.png';
import yandex from '@/public/music/yandex.png';
import Link from 'next/link';

const Album = () => {
  return (
    <div className={'relative mt-10 h-[70svh] w-full lg:w-[1300px]'}>
      <Image
        className={'h-[70svh] w-full object-fill blur-lg lg:w-[1300px]'}
        src={cover}
        alt={'cover'}
      />
      <div
        className={
          'absolute left-0 top-0 flex h-full w-full flex-col place-items-center justify-evenly md:flex-row'
        }
      >
        <Image
          className={'aspect-square w-1/2 lg:w-1/3 '}
          src={cover}
          alt={'cover'}
        />
        <div
          className={
            ' flex aspect-square w-1/3 flex-col justify-between md:justify-evenly '
          }
        >
          <Link href={''}>
            <Image src={vk} alt={'vk'} />
          </Link>
          <Link href={''}>
            <Image src={yandex} alt={'yandex'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Album;
