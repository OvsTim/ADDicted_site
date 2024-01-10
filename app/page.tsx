import Image from 'next/image'
import bigImage from '@/public/image.jpg'
import Gallery from "@/components/Gallery";
import Concerts from "@/components/Concerts";
import Album from "@/components/Album";
export default function Home() {

  return (
      <main className="m-auto bg-black flex flex-col place-items-center">
          <Image
              className={' w-full lg:w-[1024px] my-10'}
              src={bigImage} alt={'title'}/>
          <Gallery/>
          <Concerts/>
          <Album/>
      </main>
  )
}
