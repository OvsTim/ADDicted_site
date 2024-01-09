import Image from 'next/image'
import bigImage from '../public/image.jpg'
export default function Home() {

  return (
      <main className="w-full h-full m-auto bg-black flex justify-center">

          <Image
              className={'bg-black w-full lg:w-[1024px] my-10'}
              src={bigImage} alt={'title'}/>
      </main>
  )
}
