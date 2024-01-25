import Image from 'next/image';
import cover from '@/public/album/rave.webp';
import chdt from '@/public/album/chdtwebp.webp';
import ya_uhoju from '@/public/album/ya_uhoju.webp';
import vk from '@/public/music/vk.png';
import yandex from '@/public/music/yandex.png';
import Link from 'next/link';
import { AlbumData } from '@/app/types';

export const Album = () => {
  const albums: AlbumData[] = [
    {
      image: chdt,
      linkVk: 'https://music.vk.com/link/ZsLJM',
      linkYm: 'https://music.yandex.ru/album/29207763',
      slug:'chdt',
    },
    {
      image: cover,
      linkVk: 'https://vk.com/music/album/-2000255675_18255675',
      linkYm: 'https://music.yandex.ru/album/26293603',
      slug:'rave',
    },
    // {
    //   image: ya_uhoju,
    //   linkVk: 'https://vk.com/audio-2001514347_119514347',
    //   linkYm: 'https://music.yandex.ru/album/25491119',
    //   slug:'ya_uhogu'
    // },
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
