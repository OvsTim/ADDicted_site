import Image from 'next/image';
import bigImage from '@/public/image.jpg';
import Gallery from '@/components/Gallery';
import Concerts from '@/components/Concerts';
import Album from '@/components/Album';
export default function Home() {
  return (
    <main className='m-auto flex flex-col place-items-center bg-black'>
      <Image
        className={' my-10 w-full lg:w-[1024px]'}
        src={bigImage}
        alt={'title'}
      />
      <Gallery />
      <Concerts />
      <Album />
    </main>
  );
}
