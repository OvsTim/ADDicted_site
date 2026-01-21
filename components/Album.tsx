import Image from 'next/image';

import pochemuTak from '@/public/album/pochemu_tak.webp';
import vk from '@/public/music/vk.png';
import otgoloski from '@/public/album/otgoloski.webp';

import yandex from '@/public/music/yandex.png';
import Link from 'next/link';
import { AlbumData } from '@/app/types';

export const Album = () => {
  const albums: AlbumData[] = [

      {
          image:otgoloski,
          linkVk:'https://band.link/RiFCD',
          linkYm:'https://band.link/RiFCD',
          slug:'otgoloski',
      },
      {
          image:pochemuTak,
          linkVk:'https://vk.ru/music/album/-2000342817_25342817',
          linkYm:'https://music.yandex.ru/album/38348864',
          slug:'pochemuTak',
      },
    // {
    //   image: noch,
    //   linkVk: 'https://music.vk.com/link/VgyEj',
    //   linkYm: 'https://music.yandex.ru/album/35726799',
    //   slug:'noch',
    // }
  ];

  return (
    <div className={'flex flex-col'}>
      {albums.map((album) => (
        <div
          key={album.linkVk}
          className={'relative mt-10 h-[70svh] w-full lg:w-[1024px]'}
        >
          <Image
            className={'h-[70svh] w-full object-fill blur-lg lg:w-[1024px]'}
            src={album.image}
            alt={'cover'}
          />
          <div
            className={
              'absolute left-0 top-0 flex h-full w-full flex-col place-items-center justify-evenly md:flex-row'
            }
          >
            <Image
              className={'aspect-square w-1/2 lg:w-1/3 '}
              src={album.image}
              alt={'cover'}
            />
            <div
              className={
                ' flex aspect-square w-1/2 flex-col justify-center space-y-5 md:justify-evenly md:w-1/3 '
              }
            >
              <Link
                  id={album.slug+'_vkListen'}
                  className={'transition duration-500 hover:scale-110'}
                href={album.linkVk}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image src={vk} alt={'vk'} />
              </Link>
              <Link
                  id={album.slug+'_YandexMusicListen'}
                  className={'transition duration-500 hover:scale-110'}
                href={album.linkYm}
                target={'_blank'}
                rel='noopener noreferrer'
              >
                <Image src={yandex} alt={'yandex'} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
