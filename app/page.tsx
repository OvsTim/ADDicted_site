import Image from 'next/image'
import bigImage from '../public/image.jpg'
import Gallery from "@/components/Gallery";
export default function Home() {

  return (
      <main className="m-auto bg-black flex flex-col place-items-center">
              <Image
                  className={'bg-black opacity-65 w-full lg:w-[1024px] my-10'}
                  src={bigImage} alt={'title'}/>
        <Gallery/>

      </main>
  )
}
